require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dbConnect = require("./src/dbConnect")
const cors = require("cors")

dbConnect()

app.use(express.json())
app.use(cors())

const productsRouter = require("./dist/routes/products")
const contactsRouter = require("./dist/routes/contacts")
const ordersRouter = require("./dist/routes/orders")
const checkoutsRouter = require("./dist/routes/checkouts")
const reviewsRouter = require("./dist/routes/reviews")


app.use("/products", productsRouter)
app.use("/contacts", contactsRouter)
app.use("/orders", ordersRouter)
app.use("/checkouts", checkoutsRouter)
app.use("/reviews", reviewsRouter)

const port = process.env.PORT || 6968
app.listen(port, () => {
  console.log(`Listening on ${port}...`)
})
