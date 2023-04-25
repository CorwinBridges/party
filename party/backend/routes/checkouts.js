const express = require("express")
const router = express.Router()
const CheckoutModel = require("../models/Checkout")

router.post("/", async (req, res) => {
  const { orderId, cartItems, totalQuantity, totalPrice } = req.body

  try {
    const newCheckout = new CheckoutModel({
      orderId,
      cartItems,
      totalQuantity,
      totalPrice,
    })

    const savedCheckout = await newCheckout.save()
    res.status(201).json(savedCheckout)
  } catch (error) {
    res.status(500).json({ message: "Error saving checkout data", error })
  }
})

router.get("/", async (req, res) => {
  const checkouts = await CheckoutModel.find({})
  res.json(checkouts)
})

module.exports = router
