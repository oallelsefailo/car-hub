import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AboutDates } from "./AboutDates";
import AboutCard from "./AboutCard";
import { useNavigate } from "react-router-dom";

export default function AboutEvents(props) {

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