const express = require("express")
const router = express.Router()
const CheckoutModel = require("../models/Checkout")

router.post("/", async (req, res) => {
  const checkout = req.body
  const newCheckout = new ContactModel(checkout)

  await newCheckout.save()
  res.json(newCheckout)
})

router.get("/", async (req, res) => {
  const checkouts = await CheckoutModel.find({})
  res.json(checkouts)
})

module.exports = router
