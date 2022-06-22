const Flight = require('../models/flight.model');
/**
 * All flight routes travel through here. 
 * Keep very little logic operations here. 
 * 
 */

const createFlight = async ({flightNumber, departDate, arriveDate, arriveAirport, departAirport, occupantCapacity, occupantCount}) => {
   const flight = new Flight({
    flightNumber,
    departDate,
    arriveDate,
    departDate, 
    arriveAirport,
    departAirport, 
    occupantCapacity, 
    occupantCount
   });
   let error;
   try{
    await flight.save();
    return  flight._id;
    }catch(err){
        throw {status:400, message: err};
    }
    
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
