const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Teste = require('../models/Teste');
const OperacoesTeste = require('../models/OperacoesTeste');

const connection = new Sequelize(dbConfig);


Teste.init(connection);
OperacoesTeste.init(connection);