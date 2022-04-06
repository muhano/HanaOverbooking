const router = require("express").Router();
const processApi = require("./processApiRoute")
const processCore = require("./processCoreRoute")
const processFee = require("./processFeeRoute")
const user = require("./userRoute")

router.get("/", (req, res) => {
  res.send("Server Hana OverBooking with cors-2");
});

router.use(user)
router.use(processApi)
router.use(processCore)
router.use(processFee)


module.exports = router