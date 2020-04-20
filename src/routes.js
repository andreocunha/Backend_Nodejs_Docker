const express = require('express');
const ServiceController = require('./controllers/ServiceController');

const routes = express.Router();

routes.get('/services', ServiceController.index);
routes.post('/services', ServiceController.store);

module.exports = routes;