const express = require("express");
const router = express.Router();
const OrdersModel = require("../models/Order");

router.post("/", async (req, res) => {
  const order = req.body;
  const newOrder = new OrdersModel(order);

  await newOrder.save();
  res.json(newOrder);
});

router.get("/", async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});

module.exports = router;