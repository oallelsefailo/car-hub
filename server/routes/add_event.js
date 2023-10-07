const express = require("express");
const router = require('express').Router();
const eventsSchemas = require("../models/EventsSchema");

// POST Event
router.post("/", async (req, res) => {
  try {
    const { imageURL, eventName,location, date } =
      req.body;

    const eventsData = { imageURL, eventName, location, date };
    const newEvents = new eventsSchemas.EventsPage(eventsData);
    await newEvents.save();

    res.status(201).json({ message: "Event Posted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET event
router.get("/", async (req, res) => {
  try {
    const event = await eventsSchemas.EventsPage.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

module.exports = router;