const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  strikedOffPrice: { type: Number, default: 73 },
  category: { type: String, required: true },
  subCategory: { type: String },
});

module.exports = mongoose.model("product", productSchema);
