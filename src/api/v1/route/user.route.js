const express = require('express');
const rourter = express.Router();
const { addNewUser, getAllUserList } = require('../controller/user.controller')

rourter.post('/add', addNewUser)
rourter.get('/allusers', getAllUserList)

module.exports = rourter