const router = require("express").Router()
const ProductModel = require("../models/Product")

router.get("/products", async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0
    const limit = parseInt(req.query.limit) || 5
    const search = req.query.search || ""
    let sort = req.query.sort || "All"

    
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: true, message: "Internal Server Error" })
  }
})

module.exports = router
