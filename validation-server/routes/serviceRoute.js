const router = require("express").Router();
const serviceController = require('../controllers/serviceController')
const {
    inquiryAuthorization, 
    fundTransferAuthorization,
    checkStatusAuthorization,
    historyAuthorization
} = require('../middlewares/authorization')


router.post("/v1/service/overbook/accountInquiryInternal", inquiryAuthorization, serviceController.inquiry)
router.post("/v1/service/overbook/transferIntrabank", fundTransferAuthorization,  serviceController.fundTransfer)
router.post("/v1/service/overbook/checkstatus", checkStatusAuthorization, serviceController.checkStatus)
router.post("/v1/service/overbook/history", historyAuthorization , serviceController.history)


module.exports = router