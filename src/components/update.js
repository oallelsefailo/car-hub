import React from "react";
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
    <div>
      <main>
        <form>
          <label>Brand:</label>
          <br />
          <input
            type="text"
            id="brand"
            name="brand"
            value={ride.brand}
            onChange={(e) => setRide({ ...ride, brand: e.target.value })}
          ></input>
          <br />
          <label>Model:</label>
          <br />
          <input
            type="model"
            id="model"
            name="model"
            value={ride.model}
            onChange={(e) => setRide({ ...ride, model: e.target.value })}
          ></input>
          <br />
          <label>Year:</label>
          <br />
          <input
            type="text"
            id="year"
            name="year"
            value={ride.year}
            onChange={(e) => setRide({ ...ride, year: e.target.value })}
          ></input>
          <br />
          <label>Type:</label>
          <br />
          <input
            type="text"
            id="type"
            name="type"
            value={ride.type}
            onChange={(e) => setRide({ ...ride, type: e.target.value })}
          ></input>
          <br />
          <label>Drive Train:</label>
          <br />
          <input
            type="text"
            id="driveTrain"
            name="driveTrain"
            value={ride.drivetrain}
            onChange={(e) => setRide({ ...ride, drivetrain: e.target.value })}
          ></input>
          <br />
          <label>Owner:</label>
          <br />
          <input
            type="text"
            id="owner"
            name="owner"
            value={ride.owner}
            onChange={(e) => setRide({ ...ride, owner: e.target.value })}
          ></input>
          <br />
          <label>What makes your car Special:</label>
          <br />
          <input
            type="text"
            id="description"
            name="description"
            style={{ height: "100px", width: "20%", marginBottom: "10px" }}
          ></input>
          <br />
        </form>
        <button onClick={() => handleUpdateCar()}>Update</button>
      </main>
    </div>
  );
}

export default Update;
