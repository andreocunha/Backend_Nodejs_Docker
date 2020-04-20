const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Service = require('../models/Service')

const connection = new Sequelize(dbConfig);

Service.init(connection);

module.exports = connection;