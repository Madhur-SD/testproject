const express = require('express');
const rourter = express.Router();
require('./config/db')
const userRoute = require('./route/user.route.js')

rourter.use('/user',userRoute)


module.exports = rourter