const express = require("express");
const router = express.Router();
const ReviewModel = require("../models/Review");

router.post("/", async (req, res) => {
  const review = req.body;
  const newReview = new ReviewModel(review);

  await newReview.save();
  res.json(newReview);
});

router.get("/", async (req, res) => {
  const reviews = await ReviewModel.find({});
  res.json(reviews);
});

module.exports = router;