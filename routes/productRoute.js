const express = require('express')
const router= express.Router();
const {createProductControllers}= require('../controllers/productControllers')


router.route('/').post(createProductControllers)

module.exports=router