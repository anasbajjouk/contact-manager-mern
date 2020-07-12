const express = require("express");
const auth = require("../middleware/auth");
const config = require("config");
const { check, validationResult } = require("express-validator");

const router = express.Router();
const Contact = require("../models/Contact");

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get("/", auth, async (req, res, next) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// @route       POST api/contacts
// @desc        Add contact
// @access      Private
router.post(
  "/",
  [auth, [check("name", "Name is required").not().isEmpty()]],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json({ contact });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", (req, res, next) => {
  res.send("Update a user");
});

// @route       DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete("/:id", (req, res, next) => {
  res.send("Delete a user");
});

module.exports = router;
