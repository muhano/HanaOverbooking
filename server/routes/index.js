const router = require("express").Router();
const processApi = require("./processApiRoute")
const processCore = require("./processCoreRoute")
const processFee = require("./processFeeRoute")
const user = require("./userRoute")
const serviceCode = require('./serviceCodeRoute')

router.get("/", (req, res) => {
  res.send("Server Hana OverBooking with cors enabled");
});

router.post('/', (req, res) => {
  const { 'x-signature': clientSignature } = req.headers
  // console.log(clientSignature, '<-----');
  if (!clientSignature) {
    throw { name: "noHeader" }
  }

  res.status(200).json({message: `Server Hana OverBooking with cors enabled, service POST. X-SIGNATURE: ${clientSignature}`})
})

router.use(user)
router.use(processApi)
router.use(processCore)
router.use(processFee)
router.use(serviceCode)


module.exports = router