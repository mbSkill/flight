require('dotenv').config();
const express = require('express');
const app = express();
const {db} = require('./expressConfig');
const port = process.env.PORT|| 8090;


app.use(express.json());

require('./routes')(app);


app.listen(port);





