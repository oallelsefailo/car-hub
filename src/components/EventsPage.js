import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { EventDates } from "./EventDates";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

export default function EventsPage (props) {

    const navigate= useNavigate();

    const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/add_event");
        if (response.ok) {
          const data = await response.json();
          const eventsWithPlaceholders = data.map((event) => {
            if (!event.photo) {
              return { ...events, photo: "https://placekitten.com/200/200" };
            }
            return event;
          });
          setEvents(eventsWithPlaceholders);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEvents();
  }, []);

    return (
        <>
        <div className="whole-body">
        <div style= {{display: "flex", flexWrap: "wrap"}}> 
            {EventDates.map((element, index) =>
            <Card 
            key= {index} 
            imageURL= {element.imageURL} 
            eventName={element.eventName} 
            location={element.location}
            date={element.date} 
            />)
        }
        </div>
        <div className="stay-up-to-date">
            <p>Stay up to date with events! New events will be added soon!</p>
        </div>

        <div className="button">
            <p>You can also add your own events here!</p>
                <button className= "add-event-button" onClick={() => navigate('/events/AddEvent')} >Add Event</button>
                <button className="add-event-button">Delete Event</button>
        </div>
        </div>
        </>
    );
}
