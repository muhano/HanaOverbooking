const router = require("express").Router();
const serviceController = require('../controllers/serviceController')
const authorization = require('../middlewares/authorization')


router.post("/v1/service/overbook/accountInquiryInternal", authorization.inquiryAuthorization, serviceController.inquiry)
router.post("/v1/service/overbook/transferIntrabank", serviceController.inquiry)
router.post("/v1/service/overbook/checkstatus", serviceController.inquiry)
router.post("/v1/service/overbook/history", serviceController.inquiry)


module.exports = router