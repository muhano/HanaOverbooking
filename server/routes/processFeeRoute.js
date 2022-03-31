const router = require('express').Router()
const processFeeController = require('../controllers/processFeeController')


router.get('/processfee', processFeeController.getProcessFee)
router.post('/processfee', processFeeController.createProcessFee)
router.get('/processfee/:id', processFeeController.findProcessFee)
router.put('/processfee/:id', processFeeController.editProcessFee)
router.delete('/processfee/:id', processFeeController.deleteProcessFee)



module.exports = router