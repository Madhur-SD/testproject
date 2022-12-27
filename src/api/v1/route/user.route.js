const express = require('express');
const rourter = express.Router();
const { addNewUser, getAllUserList, editUser, deleteUser } = require('../controller/user.controller')

rourter.post('/add', addNewUser)
rourter.get('/allusers', getAllUserList)
rourter.post('/edit/:id', editUser)
rourter.delete('/delete/:id', deleteUser)

module.exports = rourter