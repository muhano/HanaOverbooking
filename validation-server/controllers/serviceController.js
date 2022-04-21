const { service_code } = require("../models")

const inquiry = async (req, res, next) => {
    try {
        res.status(200).json('Request success')
    } catch (err) {
        next(err)
    }
}

module.exports = {inquiry}