const { service_code } = require("../models")

const createServiceCode = async (req, res, next) => {
    try {
        res.send('create service code in controller')
    } catch (err) {
        next(err)
    }
}

module.exports = { createServiceCode } 