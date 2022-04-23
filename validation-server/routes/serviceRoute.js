const router = require("express").Router();
const serviceController = require("../controllers/serviceController");
const {
  inquiryAuthorization,
  fundTransferAuthorization,
  checkStatusAuthorization,
  historyAuthorization,
} = require("../middlewares/authorization");
const clientAuthentication = require("../middlewares/authentication");

router.post(
  "/v1/service/overbook/accountInquiryInternal",
  inquiryAuthorization,
  clientAuthentication,
  serviceController.inquiry
);
router.post(
  "/v1/service/overbook/transferIntrabank",
  fundTransferAuthorization,
  clientAuthentication,
  serviceController.fundTransfer
);
router.post(
  "/v1/service/overbook/checkstatus",
  checkStatusAuthorization,
  clientAuthentication,
  serviceController.checkStatus
);
router.post(
  "/v1/service/overbook/history",
  historyAuthorization,
  clientAuthentication,
  serviceController.history
);

module.exports = router;
