const { StatusCodes } = require("http-status-codes");
const Product = require("../model/productlist");
const productlist = require("../model/productlist");

const createproductcontroller = async (req, res) => {
  try {
    const { name, price, series_number } = req.body;

    // Validate required fields
    if (!name) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Name is required" });
    }

    // Validate data using Mongoose schema
    const product = new Product({
      name,
      price,
      series_number,
    });

    // Save the product
    await product.save();

    res.status(StatusCodes.CREATED).json({ product });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

const getAllProductsController = async (req, res) => {
  try {
    const products = await productlist.find();
    res.status(StatusCodes.OK).json({ products });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "internal server error" });
  }
};

module.exports = { createproductcontroller, getAllProductsController };
