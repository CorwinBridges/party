require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const cors = require("cors")

dbConnect()

app.use(express.json())
app.use(cors())

const ProductModel = require("./models/Product")

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

// app.get("/search", async (req, res) => {
//   const searchTerm = req.query.q
//   try {
//     const products = await Product.find({
//       $or: [
//         { title: new RegExp(searchTerm, "i") },
//         { description: new RegExp(searchTerm, "i") },
//       ],
//     })
//     res.json(products)
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })

const port = process.env.PORT || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
