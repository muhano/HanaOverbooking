const router = require("express").Router();
const processApi = require("./processApiRoute")
const processCore = require("./processCoreRoute")
const processFee = require("./processFeeRoute")
const user = require("./userRoute")
const userAuthentication = require('../middlewares/authentication')

router.get("/", (req, res) => {
  res.send("Server Hana OverBooking");
});

router.use(user)
router.use(userAuthentication)
router.use(processApi)
router.use(processCore)
router.use(processFee)


module.exports = router