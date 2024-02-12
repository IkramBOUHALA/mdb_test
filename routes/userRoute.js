const express = require("express");
const router = express.Router();
const{registerUser, login, currentUser}=require("../controllers/userController")

router.route('/register').post(registerUser)
router.route('/login').post(login)
router.route('/current').get(currentUser)

module.exports=router