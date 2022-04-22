const {service_code : serviceCode} = require('../models/index')

const inquiryAuthorization =   async (req, res, next) => {
    try {
        const {service_name} = req.user
        const serviceArray = service_name.split(', ')

        const findCode = await serviceCode.findOne({where: {name : 'Service Inquiry'}})
        if (!findCode) {
            throw {name: 'noServiceCode'}
        }
        req.user = {
            service_code : findCode.service_code
        }

        if (!serviceArray.includes(findCode.service_code)) {
            throw {name: 'noServicePrivilege'}
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {inquiryAuthorization}