const router = require("express").Router();
const service = require("./serviceRoute")
const validationController = require('../controllers/validationController')
// const clientAuthentication = require('../middlewares/authentication')

router.get('/', (req, res) => {
  res.send('Hana OverBooking validation server')
})

router.post('/', (req, res) => {
  const { 'x-signature': clientSignature } = req.headers
  // console.log(clientSignature, '<-----');
  if (!clientSignature) {
    throw { name: "noHeader" }
  }

  res.status(200).json({message: `Hana OverBooking validation server, service POST. X-SIGNATURE: ${clientSignature}`})
})

router.post("/clientvalidation", validationController.clientValidation)
// router.use(clientAuthentication)
router.use(service)

module.exports = router