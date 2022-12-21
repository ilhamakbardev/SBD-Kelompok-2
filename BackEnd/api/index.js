const express = require('express');
const productRoute = require('./products-route');
const userRoute = require('./user-route');

const allRoutes = express();

allRoutes.use('/user', userRoute);
allRoutes.use('/product', productRoute);

module.exports = allRoutes;
