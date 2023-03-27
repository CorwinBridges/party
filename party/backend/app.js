const express = require("express")
const { connectToDb, getDb } = require("./db")

const app = express()

let db

connectToDb((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("Listening on port 3000")
    })
    db = getDb()
  }
})

app.get("/products", (req, res) => {
  res.json({ mssg: "Hello from the backend" })
})
