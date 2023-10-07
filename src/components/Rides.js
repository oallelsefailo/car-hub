import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./rides.css";

function Rides() {
  const [rides, setRides] = useState([]);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await fetch("http://localhost:5000/submit_rides");
        if (response.ok) {
          const data = await response.json();
          const ridesWithPlaceholders = data.map((ride) => {
            if (!ride.photo) {
              return { ...ride, photo: "https://placekitten.com/200/200" };
            }
            return ride;
          });
          setRides(ridesWithPlaceholders);
        } else {
          console.error("Failed to fetch rides");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRides();
  }, []);

  return (
    <div className="rides-container">
      <h1>Rides</h1>
      <ul className="rides-list">
        {rides.map((ride) => (
          <li className="ride-item" key={ride._id}>
            <Link to={`/rides/${ride._id}`} className="navLink">
            <img src={ride.photo} alt={`${ride.brand} ${ride.model}`} />
            <p>Brand: {ride.brand}</p>
            <p>Model: {ride.model}</p>
            <p>Year: {ride.year}</p>
            <p>Type: {ride.type}</p>
            <p>Engine: {ride.engine}</p>
            <p>Drivetrain: {ride.drivetrain}</p>
            <p>Owner: {ride.owner}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/rides/submit">
        <button>Add Yours</button>
      </Link>
    </div>
  );
}

export default Rides;
