const router = require('express').Router()
const processCoreController = require('../controllers/processCoreController')


router.get('/processcore', processCoreController.getProcessCore)
router.post('/processcore', processCoreController.createProcessCore)
router.get('/processcore/:id', processCoreController.findProcessCore)
router.put('/processcore/:id', processCoreController.editProcessCore)
router.delete('/processcore/:id', processCoreController.deleteProcessCore)



module.exports = router