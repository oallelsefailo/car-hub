const express = require("express");
const router = require('express').Router();
const schemas = require("../models/schemas");

// POST ride
router.post("/rides", async (req, res) => {
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
router.get("/rides", async (req, res) => {
  try {
    const rides = await schemas.Rides.find();
    res.status(200).json(rides); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error" });
  }
});

// GET ride by ID
router.get("/rides/:id", async (req, res) => {
  try {
      const rideId = req.params.id;
      const rideData = await schemas.Rides.findById(rideId);
      res.status(200).json(rideData);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error" });
  }
});


// UPDATE ride
router.post("/:id/update", async (req, res) => {
  try {
      const rideId = req.params.id;
      const updatedRideData = req.body;
      const updatedRide = await schemas.Rides.findByIdAndUpdate(
          rideId,
          updatedRideData,
          { new: true } // Return the updated ride
      );
      res.status(200).json(updatedRide);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error updating" });
  }
});

//DELETE ride
router.delete("/rides/:id", async (req, res) => {
  try {
    const rideId = req.params.id;
    res.status(200).json({ message: "Ride deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting" });
  }
});


module.exports = router;
