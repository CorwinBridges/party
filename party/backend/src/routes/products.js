const express = require("express")
const router = express.Router()
const ProductModel = require("../models/Product")

router.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({})
    res.json(products)
  } catch (err) {
    res.json(err)
  }
})

router.post("/", async (req, res) => {
  const product = req.body
  const newProduct = new ProductModel(product)

  try {
    await newProduct.save()
    res.json(newProduct)
  } catch (err) {
    res.json(err)
  }
})

module.exports = router
