"use strict";

var mongoose = require("mongoose");
var FormSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});
var ContactModel = mongoose.model("contacts", FormSchema);
module.exports = ContactModel;