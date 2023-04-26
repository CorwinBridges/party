const express = require("express");
const router = express.Router();
const ContactModel = require("../models/Contact");

router.post("/", async (req, res) => {
  const contact = req.body;
  const newContact = new ContactModel(contact);

  await newContact.save();
  res.json(newContact);
});

router.get("/", async (req, res) => {
  const contacts = await ContactModel.find({});
  res.json(contacts);
});

module.exports = router;