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
<<<<<<< HEAD
          } catch (error) {
            console.error("Error:", error);
          }
        };

    return (
        <div>
            <main>
                <h1>Rides</h1>
                <form method="POST" action='/rides'>
                    <div>
                        <label>Photos: </label>
                        <input id='photos' name='photo' value= {photo} onChange={ (e)=> setPhoto(e.target.value)} />
                    </div>
                    <div>
                        <label>Brand: </label>
                        <input id='brand' name='brand' value= {brand} onChange={ (e)=> setBrand(e.target.value)} required />
                    </div>
                    <div>
                        <label>Model: </label>
                        <input id='model' name='model' value= {model} onChange={ (e)=> setModel(e.target.value)} required />
                    </div>
                    <div>
                        <label>Year: </label>
                        <input id='year' name='year' value= {year} onChange={ (e)=> setYear(e.target.value)} required />
                    </div>
                    <div>
                        <label>Type: </label>
                        <input id='type' name='type' value= {type} onChange={ (e)=> setType(e.target.value)} required />
                    </div>
                    <div>
                        <label>Engine: </label>
                        <input id='engine' name='engine' value= {engine} onChange={ (e)=> setEngine(e.target.value)} required />
                    </div>
                    <div>
                        <label>Drivetrain: </label>
                        <input id='drivetrain' name='drivetrain' value= {drivetrain} onChange={ (e)=> setDrivetrain(e.target.value)} required />
                    </div>
                    <div>
                        <label>Owner: </label>
                        <input id='owner' name='owner' value= {owner} onChange={ (e)=> setOwner(e.target.value)} required />
                    </div>
                    <input type="submit" onClick={handleSubmit} />
                </form>
                
            </main>
        </div>
    )
=======
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
>>>>>>> origin/main
}

export default Rides;
