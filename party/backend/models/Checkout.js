const mongoose = require("mongoose")

const CheckoutSchema = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  orderItems: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const CheckoutModel = mongoose.model("checkout", CheckoutSchema)
module.exports = CheckoutModel