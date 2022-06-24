const router = require('express').Router();
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
        let flight = req;
        await createFlight(flight.body)
       .then(res.json())    
        .catch(err => console.log(err));
});
router.use(validateMiddleware).patch('/', async (req, res) => {
    let flight = await updateFlight(req.body);
     return res.json(flight)
})



module.exports = router;