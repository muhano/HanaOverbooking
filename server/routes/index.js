const router = require("express").Router();
const processApi = require("./processApiRoute")

router.get("/", (req, res) => {
  res.send("Server Hana OverBooking");
});

router.use(processApi)


module.exports = router