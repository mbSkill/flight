const router = require('express').Router();
const {findAllFlights, createFlight, updateFlight, findOne} 
    = require('../controllers/flight.controller');
const { findById } = require('../models/flight.model');

router.get('/', async (req, res) =>{
    const flights = await findAllFlights();
    console.log('in flight router');
    res.json(flights);
});

router.post('/addflight', async (req, res) => {
        let flight = req;
      createFlight(flight.body);
});

router.post('/search', async (req, res) =>{

});

router.put('/update', async (req, res) => {
    console.log(req.body);
    let flight = await updateFlight(req.body);
     res.json(flight);
})



module.exports = router;