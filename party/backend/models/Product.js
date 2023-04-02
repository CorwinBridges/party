const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel
