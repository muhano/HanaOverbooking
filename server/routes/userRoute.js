const router = require("express").Router();
const userController = require('../controllers/userController')


router.post("/user/register", userController.userRegister)
router.post("/user/login", userController.userLogin)

module.exports = router