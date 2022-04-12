const router = require("express").Router();
const validationController = require('../controllers/validationController')

router.get('/', (req, res) => {
  res.send('Hana OverBooking validation server')
})

router.post("/clientvalidation", validationController.clientValidation)

module.exports = router