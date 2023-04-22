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

router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.q
    let products

    if (searchQuery) {
      // If there is a search query, filter the results by title
      products = await ProductModel.find({
        title: { $regex: searchQuery, $options: "i" },
      })
    } else {
      // If there is no search query, return all products
      products = await ProductModel.find({})
    }

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
