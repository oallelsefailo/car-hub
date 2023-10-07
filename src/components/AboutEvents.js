import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { AboutDates } from "./AboutDates";
import AboutCard from "./AboutCard";
import { useNavigate } from "react-router-dom";

export default function AboutEvents(props) {

    const navigate = useNavigate();

    return (
        <><div style={{ display: "flex", flexWrap: "wrap" }}>
            {AboutDates.map((element, index) =>
                <AboutCard
                    key={index}
                    location={element.location}
                    imageURL={element.imageURL}
                    paragraph={element.paragraph}
                />)
            }
        </div>
            <div>
                <p>Stay up to date with with your cast of Car Peeps! New events will be added soon!</p>
            </div>

            {/* <div className="button">
                <p>You can also add your own events here!</p>
                <button onClick={() => navigate('/events/AddEvent')} >Add Event</button>
                <button>Delete Event</button>
            </div> */}
        </>
    );
}