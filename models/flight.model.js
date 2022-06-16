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
    flightNumber: Number,
    // *Date will hold Date/time info
    departDate: Date,
    arriveDate: Date,
    departAirport: String,
    arriveAirport: String,
    occupantCapacity: Number,
    occupantCount: Number,
})

module.exports = mongoose.model("flight", flightSchema);