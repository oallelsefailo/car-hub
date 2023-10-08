import React from "react";
import "./submitrides.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Update() {
  const [rideId, setRideId] = useState();
  const [ride, setRide] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/submit_rides/${id}`
        );
        if (response.ok) {
          let data = await response.json();
          console.log("data: ", data);
          if (!data.photo) {
            data = { ...data, photo: "https://placekitten.com/200/200" };
            setRide({ ...data });
          } else {
            setRide({ ...data });
          }
        } else {
          console.error("Failed to fetch rides");
        }
      } catch (error) {
        console.error(error);
      }
    };
    setRideId(id);
    fetchRides();
  }, []);

  const handleUpdateCar = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/submit_rides/update/${id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ride),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      alert("Ride Updated! ");
      navigate("/rides");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="submit-container">
      <h1>Update Ride</h1>
      <form>
        <div className="label-input-group">
          <label>Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={ride.brand}
            onChange={(e) => setRide({ ...ride, brand: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            value={ride.model}
            onChange={(e) => setRide({ ...ride, model: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            value={ride.year}
            onChange={(e) => setRide({ ...ride, year: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>Type:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={ride.type}
            onChange={(e) => setRide({ ...ride, type: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>Drive Train:</label>
          <input
            type="text"
            id="driveTrain"
            name="driveTrain"
            value={ride.drivetrain}
            onChange={(e) => setRide({ ...ride, drivetrain: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={ride.owner}
            onChange={(e) => setRide({ ...ride, owner: e.target.value })}
          />
        </div>
        <div className="label-input-group">
          <label>What makes your car Special:</label>
          <textarea
            id="description"
            name="description"
            value={ride.description}
            onChange={(e) => setRide({ ...ride, description: e.target.value })}
            style={{ height: "100px", width: "100%", marginBottom: "10px" }}
          />
        </div>
        <button
          type="button"
          onClick={() => handleUpdateCar()}
          className="submit-button"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
