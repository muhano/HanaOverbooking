const {service_code : serviceCode} = require('../models/index')
// const router = require("express").Router();
// const clientAuthentication = require('../middlewares/authentication')

const inquiryAuthorization =   async (req, res, next) => {
    try {
        // console.log(req.user, '<------------');
        const findCode = await serviceCode.findOne({where: {name : 'Service Inquiry'}})
        if (!findCode) {
            throw {name: 'noServiceCode'}
        }
        // req.user.service_code = findCode.service_code
        req.user = {
            ... req.user,
            service_code : findCode.service_code
        }

        // router.use(clientAuthentication)

        console.log(req.user, '<----');

        const {service_name} = req.user
        const serviceArray = service_name.split(', ')

        if (!serviceArray.includes(findCode.service_code)) {
            throw {name: 'noServicePrivilege'}
        }

        next()
    } catch (err) {
        next(err)
    }
}

const fundtransferAuthorization =   async (req, res, next) => {
    try {
        const findCode = await serviceCode.findOne({where: {name : 'Service Fund Transfer'}})
        if (!findCode) {
            throw {name: 'noServiceCode'}
        }
        req.user = {
            ... req.user,
            service_code : findCode.service_code
        }

        const {service_name} = req.user
        const serviceArray = service_name.split(', ')

        if (!serviceArray.includes(findCode.service_code)) {
            throw {name: 'noServicePrivilege'}
        }

        next()
    } catch (err) {
        next(err)
    }
}

module.exports = {inquiryAuthorization, fundtransferAuthorization}