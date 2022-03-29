const router = require("express").Router();
const processApi = require("./processApiRoute")
const processCore = require("./processCoreRoute")

router.get("/", (req, res) => {
  res.send("Server Hana OverBooking");
});

router.use(processApi)
router.use(processCore)


module.exports = router