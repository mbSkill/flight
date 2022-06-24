const joi = require('../validators/flightModelValidator')

ValidateMiddleware = (req, res, next) => {
    try{
        console.log(req.body)
        console.log(joi.validate(res.body));

    }catch(err){
            console.log(err)
    }

    next(res);
};

module.exports = ValidateMiddleware;