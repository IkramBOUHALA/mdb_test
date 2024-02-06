const express = require("express");
const router = express.Router();
const {
  createproductcontroller,
  getAllProductsController,
} = require("../controllers/productControllers");

router.route("/").post(createproductcontroller)
.get(getAllProductsController);

module.exports = router;
