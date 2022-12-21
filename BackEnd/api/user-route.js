const express = require('express');
const {
  getAllUser,
  getUserById,
  addUser,
  deleteUserById,
  editUser,
} = require('../controller/user-controller');

const userRoute = express();

userRoute.get('/', getAllUser);
userRoute.get('/:id', getUserById);
userRoute.post('/', addUser);
userRoute.patch('/:id', editUser);
userRoute.delete('/:id', deleteUserById);

module.exports = userRoute;
