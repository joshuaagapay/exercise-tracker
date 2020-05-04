const router = require('express').Router();
const userController = require('./userController');
exports.userRoutes = require('./userAPI')(router, userController);
