const router = require('express').Router();
const exerciseController = require('./exerciseController');
exports.exerRoutes = require('./exerciseAPI')(router, exerciseController);
