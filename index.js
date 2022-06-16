require('dotenv').config();
const express = require('express');
const app = express();
const {db} = require('./expressConfig');
const port = process.env.PORT|| 8090;



require('./routes/routeList')(app);


app.listen(port);





