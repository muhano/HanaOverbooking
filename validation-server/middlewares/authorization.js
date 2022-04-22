const {service_code} = require('../models/index')

const inquiryAuthorization =   async (req, res, next) => {
    try {
        const {service_name} = req.user
        console.log(service_name.split(','), '<----------');
        

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {inquiryAuthorization}