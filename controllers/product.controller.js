const express = require("express");
const router = express.Router();

const Product = require("../models/product.model");
const categoriesModel = require("../models/categories.model");

router.get("", async (req, res) => {
  try {
    let products = await Product.find({}).lean().exec();

    return res.send(products);
  } catch (error) {
    return res.send(error.message);
  }
});

router.post("", async (req, res) => {
  try {
    let cate = await categoriesModel.findById(req.body.category);

    let product = await Product.create(req.body);
    product.category = cate.name;
    await product.save();

    cate.products.push(product);
    await cate.save();

    return res.send(product);
  } catch (error) {
    return res.send(error.message);
  }
});

module.exports = router;
