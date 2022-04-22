const { service_code } = require("../models")
const { urlTrimmer } = require("../helpers/urlTrimmer")

const inquiry = async (req, res, next) => {
    try {
        const url = req.originalUrl;
        const customUrl = urlTrimmer(url)
        const path = `../{version}/${customUrl}`
        const serviceCode = await service_code.findOne({ where: { path } })
        if (!serviceCode) {
            throw { name: "falsePath" }
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
        const url = req.originalUrl;
        const customUrl = urlTrimmer(url)
        const path = `../{version}/${customUrl}`
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

const checkStatus = async (req, res, next) => {
    try {
        const url = req.originalUrl;
        const customUrl = urlTrimmer(url)
        const path = `../{version}/${customUrl}`
        const serviceCode = await service_code.findOne({ where: { path } })
        if (!serviceCode) {
            throw { name: "falsePath" }
        }

        res.status(200).json({
            responseCode: `200${req.user.service_code}00`,
            responseMessage: 'Request Service Check Status success',
        })
    } catch (err) {
        next(err)
    }
}

const history = async (req, res, next) => {
    try {
        const url = req.originalUrl;
        const customUrl = urlTrimmer(url)
        const path = `../{version}/${customUrl}`
        const serviceCode = await service_code.findOne({ where: { path } })
        if (!serviceCode) {
            throw { name: "falsePath" }
        }

        res.status(200).json({
            responseCode: `200${req.user.service_code}00`,
            responseMessage: 'Request Service History success',
        })
    } catch (err) {
        next(err)
    }
}

module.exports = { inquiry, fundTransfer, checkStatus, history }