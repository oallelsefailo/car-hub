import React from "react";
import "./ridesExpanded.css"
import maserati from "../assets/rides_expanded/2023-mc20.jpg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RidesExpanded() {

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

    const navigate = useNavigate();
    return (
        <div>
            <main>
                <div className="car">
                    <img id="maserati" src={maserati} />
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
                </div>
                <p className="paragraph-car">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    pretium urna ipsum, ut consectetur ex feugiat id. Curabitur
                    venenatis. Cras enim purus, ultrices vitae mauris nec, euismod commodo sapien.
                    Integer pretium feugiat pretium.
                </p>
                <div className="button">
                    <button onClick={() => navigate('/rides/update')} >Update</button>
                    <button>Delete</button>
                </div>
            </main>
        </div>
    )
};

export default RidesExpanded;