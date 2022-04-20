const router = require('express').Router()
const serviceCodeController = require('../controllers/serviceCodeController')

router.get('/servicecode', serviceCodeController.getServiceCode)
router.post('/servicecode', serviceCodeController.createServiceCode)
router.get('/servicecode/:id', serviceCodeController.findServiceCode)
router.put('/servicecode/:id', serviceCodeController.editServiceCode)
router.delete('/servicecode/:id', serviceCodeController.deleteServiceCode)


module.exports = router