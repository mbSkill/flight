const Joi = require('Joi');

 const joi = Joi.object().keys({
    departAirport: Joi.string().required().regex(/([A-Z])/).length(3),
    arriveAirport: Joi.string().required().regex(/([A-Z])/).length(3),
    departDate: Joi.date().iso().greater('now'),
    arriveDate: Joi.date().iso().greater('now'),
    occupantCapacity: Joi.number().integer().max(200).min(2),
    occupantCount: Joi.number().integer().max(200).min(0),
    _id: Joi.allow(),
    flightNumber: Joi.allow()
    });



module.exports = joi;