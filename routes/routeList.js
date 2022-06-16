const express = require('express');
const indexRouter = require('./index.route');
const flightRouter = require('./flight.route');

module.exports = function (app) {
    app.use("/", indexRouter);
    app.use("/flight", flightRouter);
};