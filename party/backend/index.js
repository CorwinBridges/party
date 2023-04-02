require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const ProductModel = require("./models/Product")
const dbConnect = require("./dbConnect")
const cors = require("cors")

dbConnect()

app.use(express.json())
app.use(cors())


app.get("/getProducts", (req, res) => {
  ProductModel.find({})
    .then((result) => {
      res.json(result)
    })
    .catch((err) => {
      res.json(err)
    })
})

app.post("/createProduct", async (req, res) => {
  const product = req.body
  const newProduct = new ProductModel(product)

  await newProduct.save()
  res.json(newProduct)
})

const port = process.env.PORT || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
