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
                <p>Stay uo to date witht the Pit Crew of Car-Hub</p>
            </div>

            <div className="button">
                <p>Check out Upcoming Events on our Events Page.</p>
                <button onClick={() => navigate('/events/#')} >Head over to Events</button>
                {/* <button>Delete Event</button> */}
            </div>
        </>
    );
}