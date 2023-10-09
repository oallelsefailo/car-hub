const express = require("express");
const router = require('express').Router();
const schemas = require("../models/schemas");

// POST ride
router.post("/", async (req, res) => {
  try {
    const { photo, brand, model, year, type, engine, drivetrain, owner } =
      req.body;

    const ridesData = {
      photo,
      brand,
      model,
      year,
      type,
      engine,
      drivetrain,
      owner,
    };
    const newRides = new schemas.Rides(ridesData);
    await newRides.save();

    res.status(201).json({ message: "Ride Posted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET ride
router.get("/", async (req, res) => {
  try {
    const rides = await schemas.Rides.find();
    res.status(200).json(rides);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET ride by ID
router.get("/:id", async (req, res) => {
  try {
    const rideId = req.params.id;
    const ride = await schemas.Rides.findById(rideId);
    if (!ride) {
      return res.status(404).json({ error: "Ride not found" });
    }
    res.status(200).json(ride);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
  }
});

// UPDATE ride
router.post("/update/:id", async (req, res) => {
  const { brand, model, year, type, drivetrain, owner, engine } = req.body;
  try {
    const rideId = req.params.id;
    const updatedRide = await schemas.Rides.findOneAndUpdate(
      { _id: rideId },
      {
        brand,
        model,
        year,
        type,
        engine,
        drivetrain,
        owner,
      },
      { new: true }
    );
    res.status(200).json(updatedRide);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating" });
  }
});

//DELETE ride
router.delete("/delete/:id", async (req, res) => {
  try {
    const rideId = req.params.id;
    await schemas.Rides.findOneAndDelete({ _id: rideId });
    res.status(200).json({ message: "Ride deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting" });
  }
});

module.exports = router;
