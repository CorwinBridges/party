"use strict";

var mongoose = require("mongoose");
var OrdersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  shipAddress: {
    type: String,
    required: true
  },
  shipCity: {
    type: String,
    required: true
  },
  shipZipCode: {
    type: String,
    required: true
  },
  shipState: {
    type: String,
    required: true
  },
  creditCardNumber: {
    type: String,
    required: true
  },
  creditCardExpiration: {
    type: String,
    required: true
  },
  creditCardCVV: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});
var OrderModel = mongoose.model("order", OrdersSchema);
module.exports = OrderModel;