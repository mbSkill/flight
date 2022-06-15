const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('cool beans', ()=>{
    console.log("double cool beans");
});

module.exports.db = mongoose;