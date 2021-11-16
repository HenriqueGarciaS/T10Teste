const express = require('express');
const routes = express.Router();

const testeController = require('./Controller/TesteController');


routes.get('/',(req,res) =>{
    return res.json({text:"rotas de teste : /teste/select, /teste/insert"})
})

routes.post('/teste/select',testeController.findOne);

routes.post('/teste/insert',testeController.store)

module.exports = routes;