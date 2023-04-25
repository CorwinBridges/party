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
const ordersRouter = require("./routes/orders")
const checkoutsRouter = require("./routes/checkouts")
const reviewsRouter = require("./routes/reviews")

app.use("/products", productsRouter)
app.use("/contacts", contactsRouter)
app.use("/orders", ordersRouter)
app.use("/checkouts", checkoutsRouter)
app.use("/reviews", reviewsRouter)

const port = process.env.port || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
