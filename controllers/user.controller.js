const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Post = require("../models/product.model");
const isLoggedIn = require("../middlewares/auth");
const Product = require("../models/product.model");
const { token } = require("./auth.controller");
const { json } = require("express/lib/response");

router.get("", async (req, res) => {
  try {
    let user = await User.find({}).lean().exec();

    return res.send(user);
  } catch (error) {
    return res.send(error.message);
  }
});

//get user cart
router.get("/:userId/cart", async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).populate("cart");

    const newToken = token(user);

    res.cookie("token", "");
    res.cookie("token", newToken, {
      expire: new Date() + 9999,
    });

    return res.render("cart", { user });
  } catch (error) {
    return res.send(error.message);
  }
});

//add to cart
router.post("/:userId/:prodId/cart", async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).populate("cart");
    const product = await Product.findById(req.params.prodId);

    // const user = isLoggedIn(req);

    user.cart.push(product);
    await user.save();

    const newToken = token(user);

    res.cookie("token", "");
    res.cookie("token", newToken, {
      expire: new Date() + 9999,
    });

    res.render("cart", { user });
  } catch (e) {
    console.log(e.message);
    return;
  }
});

router.delete("/:userId/:prodId/cart", async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $pull: { cart: req.params.prodId },
      },
      { new: true }
    ).populate("cart");

    const newToken = token(user);

    res.cookie("token", "");
    res.cookie("token", newToken, {
      expire: new Date() + 9999,
    });

    res.render(`cart`, { user });
  } catch (e) {
    console.log(e.message);
    return;
  }
});

module.exports = router;
