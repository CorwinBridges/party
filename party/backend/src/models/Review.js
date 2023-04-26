const mongoose = require("mongoose")

const ReviewSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
})

const ReviewModel = mongoose.model("reviews", ReviewSchema)
module.exports = ReviewModel
