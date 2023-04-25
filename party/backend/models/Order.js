const mongoose = require("mongoose")

const OrdersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  shipAddress: {
    type: String,
    required: true,
  },
  shipCity: {
    type: String,
    required: true,
  },
  shipZipCode: {
    type: Number,
    required: true,
  },
  shipState: {
    type: String,
    required: true,
  },
  shipCountry: {
    type: String,
    required: true,
  },
  creditCardNumber: {
    type: Number,
    required: true,
  },
  creditCardNumber: {
    type: Number,
    required: true,
  },
  creditCardExpiration: {
    type: Number,
    required: true,
  },
  creditCardCVV: {
    type: Number,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

const OrderModel = mongoose.model("order", OrdersSchema)
module.exports = OrderModel
