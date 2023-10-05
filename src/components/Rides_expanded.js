import React from "react";
import "./ridesExpanded.css"
import maserati from "../assets/rides_expanded/2023-mc20.jpg"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function RidesExpanded() {
    const navigate = useNavigate();
    return (
        <div>
            <main>
                <div className="car">
                    <img id="maserati" src={maserati} />
                    <div className="car-data">
                        <h1>Maserati M20</h1>
                        <ul>
                            <li><b>Year:</b> 2023</li>
                            <li><b>Engine:</b> V6</li>
                            <li><b>Type:</b> Super Car</li>
                            <li><b>Drive Train:</b> RWD</li>
                            <li><b>Owner:</b> Richie Rich</li>
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