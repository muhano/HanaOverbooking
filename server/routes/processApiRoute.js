const router = require('express').Router()
const processApiController = require('../controllers/processApiController')


router.get('/processapi', processApiController.getProcessApi)
router.post('/processapi', processApiController.createProcessApi)
router.put('/processapi/:id', processApiController.editProcessApi)



module.exports = router