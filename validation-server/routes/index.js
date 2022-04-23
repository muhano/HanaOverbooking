const router = require("express").Router();
const service = require("./serviceRoute")
const validationController = require('../controllers/validationController')
// const clientAuthentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('Hana OverBooking validation server')
})

router.post("/clientvalidation", validationController.clientValidation)
// router.use(clientAuthentication)
router.use(service)

module.exports = router