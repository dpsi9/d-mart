const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema({
  imgUrl: { type: String, require: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
  strikedOffPrice: { type: Number, default: 73 },
});

const Grocery = mongoose.model("grocery", grocerySchema);

module.exports = Grocery;
