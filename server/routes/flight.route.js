const router = require('express').Router();
const { Error } = require('mongoose');
const {findAllFlights, createFlight, updateFlight, findById, deleteById} 
    = require('../controllers/flight.controller');
const joi = require('../validators/flightModelValidator');

router.get('/', async (req, res) =>{
    const flights = await findAllFlights();
    res.json(flights);
});

router.get('/:id', async (req, res)=>{
    console.log(req.params)
    let flight = await findById(req.params.id);
    res.json(flight);
}) 

router.post('/', async (req, res) => {
        let flight;
        let {error, value} = joi.validate(req.body);
        if(error){
            res.status(400)
            res.json(error);
            console.log(error);
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
    console.log(req.body)
    let flight = await updateFlight(req.body)
        .catch((error) =>{
            res.status(400).json(error).send();
        })
        .then((data) =>{
            return res.json(data);
            console.log(flight);
        });
})

router.delete('/:id', async (req, res) => {
    let flight = await deleteById(req.params.id);
    return res.json(flight);
})



module.exports = router;