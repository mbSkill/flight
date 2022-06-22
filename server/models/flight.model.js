/**
 * Flight Number
 * Departure Date
 * Arrival date
 * departure time
 * arrival time
 * departure airport
 * arrival airport
 * current number of passengers
 * passenger limit
 */

/**
 * This will be a one way flight btw
 */

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: {type: Number, required: true, unique: true},
    // *Date will hold Date/time info
    departDate: {type: Date,},
    arriveDate: {type: Date,},
    departAirport: {type: String, required: true},
    arriveAirport: {type: String, required: true},
    occupantCapacity: {type: Number, required: true},
    occupantCount: Number,
})

module.exports = mongoose.model("Flight", flightSchema,"Flights");