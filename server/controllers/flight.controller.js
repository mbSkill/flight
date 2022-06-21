const Flight = require('../models/flight.model');
const validateFlightInput = require( '../validate/validateFlightInput');
/**
 * All flight routes travel through here. 
 * Keep very little logic operations here. 
 * 
 */

const createFlight = (flight) => {

    //  Flight.create(flight)
    //     .catch(err => console.log(err));
     return validateFlightInput(flight);
}

const updateFlight =  async (flight) => {
   //Need to validate the flight perams to ensure data is formatted/correct.
   //Might need to move functionality to its own file. Keep controller small if possible.
    return await Flight.findOneAndUpdate(flight._id, flight);
}

const findAllFlights = () => {
    let flights = Flight.find();
    return flights;
}

const findOne = (id) => {
    return Flight.findOne(id);
}

module.exports =  { createFlight, findAllFlights, updateFlight, findOne };
