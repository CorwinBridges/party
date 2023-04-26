require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dbConnect = require("./src/dbConnect")
const cors = require("cors")

dbConnect()

app.use(express.json())
app.use(cors())

const productsRouter = require("./src/routes/products")
const contactsRouter = require("./src/routes/contacts")
const ordersRouter = require("./src/routes/orders")
const checkoutsRouter = require("./src/routes/checkouts")
const reviewsRouter = require("./src/routes/reviews")

app.use("/api/products", productsRouter)
app.use("/api/contacts", contactsRouter)
app.use("/api/orders", ordersRouter)
app.use("/api/checkouts", checkoutsRouter)
app.use("/api/reviews", reviewsRouter)

const port = process.env.PORT || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
