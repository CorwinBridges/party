require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dbConnect = require("./dbConnect")
const cors = require("cors")

dbConnect()

app.use(express.json())
app.use(cors())

const productsRouter = require("./routes/products")
const contactsRouter = require("./routes/contacts")

app.use("/products", productsRouter)
app.use("/contacts", contactsRouter)

const port = process.env.PORT || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
