const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_FLIGHT).then(e => {
    console.log(e.STATES);
});

module.exports.db = mongoose;