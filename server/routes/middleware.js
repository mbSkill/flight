const joi = require('../validators/flightModelValidator')
const Joi = require('joi');

ValidateMiddleware = (req, res, next) => {
    try{
        console.log(req.body)
        let val = joi.validate(res.body, );
        console.log("Try validation\n" + Object.entries(val));
        let { error } = val;
        console.log(error)
        const valid = error == null;
        console.log(valid);

    }catch(err){
            console.log("Error:   " +err)
    }

    next(res);
};

module.exports = ValidateMiddleware;