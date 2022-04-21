const instanceAxios = require('../apis/axios')
const { service_code } = require("../models")

const clientValidation = async (req, res, next) => {
    try {
        // const services = await serviceCode.findAll();
        // console.log(services);

        const url = req.originalUrl;
        const path = `../{version}${url}`
        // console.log(path, '<--------');

        const serviceCode = await service_code.findOne({ where : { path } })

        if (!serviceCode) {
            throw { name: "noServiceCode" }
        }

        const code = serviceCode.service_code
        req.user = {
            service_code: code
        }
        // console.log(req.user, '<-----');

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

        const response = await instanceAxios({
            url: '/user/clientvalidation',
            method: 'post',
            headers: {
                'X-CLIENT-KEY': clientKey,
                'X-TIMESTAMP': timeStamp,
                'X-SIGNATURE': clientSignature
            },
            data: { grant_type }
        })

        res.setHeader('X-CLIENT-KEY', clientKey);
        res.setHeader('X-TIMESTAMP', timeStamp);

        res.status(200).json(
            {   
                responseCode: `200${code}00`,
                responseMessage: "Successfull",
                accessToken: response.data,
                tokenType: "Bearer",
                expiresIn: "900"
            }
        )
    } catch (err) {
        next(err)
    }
}

module.exports = { clientValidation }