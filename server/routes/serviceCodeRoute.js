const router = require('express').Router()
const serviceCodeController = require('../controllers/serviceCodeController')



router.get('/servicecode', serviceCodeController.createServiceCode)


module.exports = router