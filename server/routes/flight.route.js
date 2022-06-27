const router = require('express').Router();
const { Error } = require('mongoose');
const {findAllFlights, createFlight, updateFlight, findOne} 
    = require('../controllers/flight.controller');
const { findById } = require('../models/flight.model');
const joi = require('../validators/flightModelValidator');
const validateMiddleware = require('./middleware');

router.get('/', async (req, res) =>{
    const flights = await findAllFlights();
    res.json(flights);
});

router.post('/', async (req, res) => {
        let flight;
        let {error, value} = joi.validate(req.body);
        if(error){
            res.status(400)
            res.json(error);
        }else{
            try{
                flight = await createFlight(req.body)
            }catch(error){
                res.status(400)
                flight = error;
            }
                res.json(flight);
        }
        
});

router.patch('/', async (req, res) => {
    let flight = await updateFlight(req.body);

         return res.json(flight);
})



module.exports = router;