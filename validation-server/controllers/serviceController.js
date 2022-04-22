const { service_code } = require("../models")
const { urlTrimmer } = require("../helpers/urlTrimmer")

const inquiry = async (req, res, next) => {
    try {
        const url = req.originalUrl;

        const customUrl = urlTrimmer(url)

        const path = `../{version}/${customUrl}`
        const serviceCode = await service_code.findOne({ where: { path } })
        if (!serviceCode) {
            throw { name: "noServiceCode" }
        }


        res.status(200).json({
            responseCode: `200${req.user.service_code}00`,
            responseMessage: 'Request Service Inquiry success',
        })
    } catch (err) {
        next(err)
    }
}

const fundTransfer = async (req, res, next) => {
    try {
        // res.send('transfer fund ,-------------')
        const url = req.originalUrl;

        const customUrl = urlTrimmer(url)

        const path = `../{version}/${customUrl}`
        // console.log(path, '<-----');
        const serviceCode = await service_code.findOne({ where: { path } })
        if (!serviceCode) {
            throw { name: "falsePath" }
        }


        res.status(200).json({
            responseCode: `200${req.user.service_code}00`,
            responseMessage: 'Request Service Fund Transfer success',
        })
    } catch (err) {
        next(err);
    }
}

module.exports = { inquiry, fundTransfer }