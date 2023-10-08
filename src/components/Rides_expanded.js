import React from "react";
import "./ridesExpanded.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RidesExpanded ({ ride }) {
    const [rides, setRides] = useState([]);

    useEffect(() => {
        const fetchRides = async () => {
            try {
                const response = await fetch(`http://localhost:5000/submit_rides/${ride.id}`);
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

    const navigate = useNavigate();
    return (
        <div>
            <main>
            {rides.map((ride) => (
                <div className="car">
                    <img id="carImg" src={ride.photo} alt={`${ride.brand} ${ride.model}`} />
                    <div className="car-data">
                        <h1>{ride.brand}{ride.model}</h1>
                        <ul>
                            <li><b>Year:</b> {ride.year}</li>
                            <li><b>Type:</b> {ride.type} </li>
                            <li><b>Engine:</b> {ride.engine}</li>
                            <li><b>Drive Train:</b> {ride.drivetrain}</li>
                            <li><b>Owner:</b> {ride.owner}</li>
                        </ul>
                    </div>
                </div>))}
                <div className="button">
                    <button onClick={() => navigate(`/rides/${ride.id}/update`)}>
                        Update
                    </button>
                    <form method="POST" action={`/rides/${ride.id}/?_method=DELETE`}>
                    <button>Delete</button>
                    </form>
                </div>
            </main>
        </div>
    )
};

export default RidesExpanded;