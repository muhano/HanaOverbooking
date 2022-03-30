const router = require('express').Router()
const processApiController = require('../controllers/processApiController')

router.get('/processapi', processApiController.getProcessApi)
router.post('/processapi', processApiController.createProcessApi)
router.get('/processapi/:id', processApiController.findProcessApi)
router.put('/processapi/:id', processApiController.editProcessApi)
router.delete('/processapi/:id', processApiController.deleteProcessApi)

module.exports = router