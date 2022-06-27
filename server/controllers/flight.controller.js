const { default: mongoose } = require('mongoose');
const Flight = require('../models/flight.model');
const joi = require('../validators/flightModelValidator');
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
    return flight;
    }catch(err){
        throw {status:400, message: err};
    }
    
}

const updateFlight =  async (_flight) => {
   //Need to validate the flight perams to ensure data is formatted/correct.
   //Might need to move functionality to its own file. Keep controller small if possible.
   const {error, value} = joi.validate(_flight);
   if(error){
    return error;
    console.log(error)
   }else{
        let flight = await Flight.findById(_flight._id);
            Object.assign(flight,_flight)

            return await flight.save();
   }
}



const findAllFlights = () => {
    let flights = Flight.find();
    return flights;
}

const findById = (id) => {
    return Flight.findById(id);
}

module.exports =  { createFlight, findAllFlights, updateFlight, findById };
