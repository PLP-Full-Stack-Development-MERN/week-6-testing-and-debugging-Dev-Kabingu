const express = require("express");
const router = express.Router();
const Bug = require("../models/Bug");

// Create Bug
router.post("/", async (req, res) => {
  try {
    const newBug = new Bug(req.body);
    const savedBug = await newBug.save();
    res.status(201).json(savedBug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Bugs
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Bug
router.put("/:id", async (req, res) => {
  try {
    const updatedBug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Bug
router.delete("/:id", async (req, res) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
