const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  imgUrl: { type: String, require: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
  strikedOffPrice: { type: Number, default: 73 },
});

const Fruit = mongoose.model("fruit", fruitSchema);

module.exports = Fruit;
