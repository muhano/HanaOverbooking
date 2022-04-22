const { service_code } = require("../models")

const inquiry = async (req, res, next) => {
    try {
        const url = req.originalUrl;

        let slashMark = 0
        let customUrl = ''
        for (let i = 0; i < url.length; i++) {
            if (slashMark < 2) {
                if (url[i] === '/') slashMark++
            } else if (slashMark >= 2) {
                customUrl += url[i]
            }
        }

        const path = `../{version}/${customUrl}`
        const serviceCode = await service_code.findOne({ where : { path } })
        if (!serviceCode) {
            throw { name: "noServiceCode" }
        }
        

        res.status(200).json('Request Service Inquiry success')
    } catch (err) {
        next(err)
    }
}

module.exports = { inquiry }