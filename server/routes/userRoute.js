const router = require("express").Router();
const userController = require('../controllers/userController')
const userAuthentication = require('../middlewares/authentication')


router.post("/user/login", userController.userLogin)
router.use(userAuthentication)
router.post("/user/register", userController.userRegister)

module.exports = router