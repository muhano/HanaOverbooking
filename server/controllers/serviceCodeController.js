const { service_code : serviceCode } = require("../models")

const getServiceCode = async (req, res, next) => {
    try {
        const response = await service_code.findAll();
        res.status(200).json(response)
    } catch (err) {
        next(err)
    }
}

const createServiceCode = async (req, res, next) => {
    try {
        const {service_code, name, version, http_method, path} = req.body

        const newServiceCode = await serviceCode.create({
            service_code, name, version, http_method, path
        })

        res.status(201).json(newServiceCode);
    } catch (err) {
        next(err)
    }
}

module.exports = { getServiceCode, createServiceCode } 