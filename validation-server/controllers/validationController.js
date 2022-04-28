// const instanceAxios = require('../apis/axios')
const { service_code, data_process_api } = require("../models")
const { verifyClientToken, signClientToken } = require("../helpers/jwt");

const clientValidation = async (req, res, next) => {
    try {
        const url = req.originalUrl;
        const path = `../{version}${url}`
        console.log(path, '<--------');

        const serviceCode = await service_code.findOne({ where : { path } })

        if (!serviceCode) {
            throw { name: "noServiceCode" }
        }

        const code = serviceCode.service_code
        req.user = {
            service_code: code
        }

        const { 'x-client-key': clientKey, 'x-timestamp': timeStamp, 'x-signature': clientSignature } = req.headers;
        const { grant_type } = req.body;
        if (!clientKey || !timeStamp || !clientSignature) {
            throw { name: "noHeader" }
        }

        if (!Date.parse(timeStamp)) {
            throw { name: "invalidDate" }
        }

        const dateParsed = new Date(Date.parse(timeStamp))
        const isoDate = dateParsed.toISOString()
        if (isoDate !== timeStamp) {
            throw { name: "invalidDate" }
        }

        if (!grant_type) {
            throw { name: "noBody" }
        }

        const findClient = await data_process_api.findOne({
            where: { client_id : clientKey }
        })
        if (!findClient) {
            throw { name: "clientNotFound"}
        }

        if (findClient.client_secret !== grant_type) {
            throw { name: "falseClientSecret"}
        }

        const public_key = findClient.public_key
        // console.log(public_key, '<-----');

        const isValidSignature = verifyClientToken(clientSignature, public_key)

        const validSignature = isValidSignature.split('|')
        
        if (validSignature[0] !== clientKey || validSignature[1] !== timeStamp) {
            throw { name: "XSignatureMismatch"}
        }

        const payload = {
            client_id: findClient.client_id
        };

        const token = signClientToken(payload);

        // const response = await instanceAxios({
        //     url: '/user/clientvalidation',
        //     method: 'post',
        //     headers: {
        //         'X-CLIENT-KEY': clientKey,
        //         'X-TIMESTAMP': timeStamp,
        //         'X-SIGNATURE': clientSignature
        //     },
        //     data: { grant_type }
        // })

        res.setHeader('X-CLIENT-KEY', clientKey);
        res.setHeader('X-TIMESTAMP', timeStamp);

        res.status(200).json(
            {   
                responseCode: `200${code}00`,
                responseMessage: "Successfull",
                accessToken: token,
                tokenType: "Bearer",
                expiresIn: "900"
            }
        )
    } catch (err) {
        next(err)
    }
}

module.exports = { clientValidation }