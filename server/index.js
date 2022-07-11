require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const {db} = require('./expressConfig');
const port = process.env.PORT|| 8090;


app.use(express.json());
app.use(cors());

require('./routes')(app);


app.listen(port);





