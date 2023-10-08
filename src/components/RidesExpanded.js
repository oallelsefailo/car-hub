import React from "react";
import "./ridesexpanded.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RidesExpanded() {
  const [rideId, setRideId] = useState();
  const [ride, setRide] = useState([]);
  const { id } = useParams();

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

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/submit_rides/delete/${id}`,
        {
          method: "DELETE",
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
      alert("Ride Deleted! ");
      navigate("/rides");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <main>
        <div className="car">
          <img
            id="carImg"
            src={ride?.photo}
            alt={`${ride?.brand} ${ride?.model}`}
          />
          <div className="car-data">
            <h1>
              {ride?.brand}
              {ride?.model}
            </h1>
            <ul>
              <li>
                <b>Year:</b> {ride?.year}
              </li>
              <li>
                <b>Type:</b> {ride?.type}{" "}
              </li>
              <li>
                <b>Engine:</b> {ride?.engine}
              </li>
              <li>
                <b>Drive Train:</b> {ride?.drivetrain}
              </li>
              <li>
                <b>Owner:</b> {ride?.owner}
              </li>
            </ul>
          </div>
        </div>
        <div className="button">
          <button onClick={() => navigate(`/rides/update/${id}`)}>
            Update
          </button>
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
      </main>
    </div>
  );
}

export default RidesExpanded;
