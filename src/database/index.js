const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Teste = require('../models/Teste');

const connection = new Sequelize(dbConfig);

Teste.init(connection);