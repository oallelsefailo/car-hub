import React from "react";
import "./eventsUpdateDelete.css"

export default function AddEvent () {
    return (
        <div className="add-event-div">
            <div className= "AddEventInputs">
            <form method="POST" action="/events">
                <label>Event Name:</label><br />
                    <input type="text" id="Event" name="Event" placeholder="Event Name"></input><br />
                <label>Date:</label><br />
                    <input type="Date" id="model" name="Date" placeholder="Date"></input><br />
                <label>Event Image:</label><br />
                    <input type="file" id="EventImage" name="EventImage"></input><br />
                <label>City/State:</label><br />
                    <input type="text" id="CityState" name="CityState" placeholder="City/State"></input><br />
                    <br></br>
                    <input className="add-event-button" type="submit" value="Add Event" />
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