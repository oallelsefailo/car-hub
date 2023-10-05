import React from "react";

export default function AddEvent () {
    return (
        <div className="Addeventdiv">
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
                    <input className="AddEventButton" type="submit" value="Add Event" />
            </form>
            </div>
        </div>
    )
}