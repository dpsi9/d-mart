const express = require("express");
const router = express.Router();

const isLoggedIn = require("../middlewares/auth");

const Fruit = require("../models/fruits.model");
const Grocery = require("../models/grocerry.model");
const Cate = require("../models/categories.model");
const productModel = require("../models/product.model");

router.get("", (req, res) => {
  res.render("allCategories");
});

router.post("", async (req, res) => {
  try {
    let category = await Cate.create(req.body);

    return res.send(category);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/all", async (req, res) => {
  try {
    let category = await Cate.find({}).lean().exec();

    return res.send(category);
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/grocery", async (req, res) => {
  try {
    let lists = await productModel.find({ category: "grocerry" }).lean().exec();

    let user = isLoggedIn(req);
    let finalList = [];

    if (req.query.subCat) {
      lists.map((element) => {
        if (element.subCategory == req.query.subCat) {
          finalList.push(element);
        }
      });
      return res.render("grocery", { lists: finalList, user });
    }

    res.render("grocery", { lists, user });
  } catch (error) {
    return res.render("error");
  }
});

router.get("/fruits&veg", async (req, res) => {
  try {
    let lists = await productModel.find({ category: "fruits" }).lean().exec();

    let user = isLoggedIn(req);
    let finalList = [];

    if (req.query.subCat) {
      lists = lists.map((element) => {
        if (element.subCategory == req.query.subCat) {
          finalList.push(element);
        }
      });
      return res.render("fruits", { lists: finalList, user });
    }

    res.render("fruits", { lists, user });
  } catch (error) {
    return res.render("error");
  }
});

module.exports = router;
