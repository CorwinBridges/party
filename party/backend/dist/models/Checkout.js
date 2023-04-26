const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  cartItems: [{
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
  }],
  totalQuantity: { type: Number, required: true },
  subtotalPrice: { type: Number, required: true },
  taxes: { type: Number, required: true },
  shipping: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const CheckoutModel = mongoose.model("checkout", CheckoutSchema);
module.exports = CheckoutModel;