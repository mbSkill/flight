const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(e => {
    console.log(e.STATES);
});

module.exports.db = mongoose;