const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ridesSchema = new Schema({
 photo: { type: String},  
 brand: { type: String, required: true },
 model: { type: String, required: true},
 year: { type: Number, required: true},
 type: { type: String, required: true},
 engine: { type: String, required: true },
 drivetrain: {type: String, required: true},
 owner:  {type: String, required: true},
});

const Rides = mongoose.model('Rides', ridesSchema, 'rides');

const mySchemas = {'Rides': Rides}

module.exports = mySchemas