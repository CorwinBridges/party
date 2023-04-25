const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
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
  rating: {
    type: Number,
    required: true,
  },
  best_seller: {
    type: Boolean,
    required: true,
  },
  color: {
    type: [String],
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
})

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel
