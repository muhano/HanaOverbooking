const router = require("express").Router();
var cors = require('cors')
const userController = require('../controllers/userController')
const userAuthentication = require('../middlewares/authentication')


router.post("/user/login", cors(), userController.userLogin)
router.use(userAuthentication)
router.post("/user/register", userController.userRegister)

module.exports = router