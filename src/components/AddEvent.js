import React from "react";
import { useState } from "react";
import "./eventsUpdateDelete.css"

export default function AddEvent () {
        
        const [eventName, setEventName] = useState("");
        const [date, setDate] = useState("");
        const [imageURL, setImageURL] = useState("");
        const [location, setLocation] = useState("");
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch("http://localhost:5000/add_event", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                eventName,
                imageURL,
                location,
              }),
            });
      
            if (response.ok) {
              console.log("Event Posted");
              setEventName("");
              setImageURL("");
              setLocation("");
            } else {
              console.error("Error, could not post event.");
            }
          } catch (error) {
            console.error(error);
          }
        };

    return (
        <div className="add-event-div">
            <div className= "AddEventInputs">
            <form method="POST" action="/events">
                <label>Event Name:</label><br />
                    <input  type="text" 
                            id="eventName" 
                            name="eventName" 
                            placeholder="Event Name" 
                            value={eventName} 
                            onChange={(e) => setEventName(e.target.value)} 
                            /> <br />
                <label>Date:</label><br />
                    <input  type="Date" 
                            id="date" 
                            name="date" 
                            placeholder="Date" 
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            /> <br />
                <label>Event Image:</label><br />
                    <input  type="url" 
                            id="imageURL" 
                            name="imageURL" 
                            value={imageURL}
                            onChange={(e) => setImageURL(e.target.value)}
                            /> <br />
                <label>City/State:</label><br />
                    <input  type="text" 
                            id="location" 
                            name="location" 
                            placeholder="City/State" 
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            /> <br />
                    <br></br>
                    <input  className="add-event-button" 
                            type="submit" 
                            value="Add Event" 
                            onClick={handleSubmit} />
            </form>
            <div className='add-event-button'>
                    <a href= "/events">
                        <button>Back</button>
                        </a>
            </div>
            </div>
            </div>
    )
}