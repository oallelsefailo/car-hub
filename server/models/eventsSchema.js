const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema ({
        imageURL: {Type: String },
        eventName: {Type: String },
        location: {Type: String },        
        date: {Type: String }
});

const EventsPage = mongoose.model("EventsPage", eventsSchema, "events");

const myEventSchemas = { EventsPage : EventsPage };

module.exports = myEventSchemas;