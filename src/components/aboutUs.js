import React from "react";
import { AboutDates } from "./aboutDates";
import AboutCard from "./AboutCard";
import { useNavigate } from "react-router-dom";

function AboutUs(props) {

    const navigate = useNavigate();

    return (
        <>
        <div>
            <p><h1>About The Crew</h1></p>
        </div>
        
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"center" }}>
            {AboutDates.map((element, index) =>
                <AboutCard
                    key={index}
                    imageURL={element.imageURL}
                    location={element.location}
                    paragraph={element.paragraph}
                />)
            }
        </div>
            <div>
                <p>Page Created by: Manny</p>
            </div>
        </>
    );
}

export default AboutUs;