const router = require("express").Router();
const serviceController = require('../controllers/serviceController')
const {inquiryAuthorization, fundtransferAuthorization} = require('../middlewares/authorization')


router.post("/v1/service/overbook/accountInquiryInternal", inquiryAuthorization, serviceController.inquiry)
router.post("/v1/service/overbook/transferIntrabank", fundtransferAuthorization,  serviceController.fundTransfer)
router.post("/v1/service/overbook/checkstatus", serviceController.inquiry)
router.post("/v1/service/overbook/history", serviceController.inquiry)


module.exports = router