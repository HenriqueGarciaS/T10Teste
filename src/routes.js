const express = require('express');
const routes = express.Router();

const testeController = require('./Controller/TesteController');


routes.get('/',(req,res) =>{
    return res.json({text:"rotas de teste : (POST) /teste/select body: id'numero' , (POST) /teste/insert body: nome'Texto'"})
})

routes.post('/teste/select',testeController.findOne);

routes.post('/teste/insert',testeController.store)

module.exports = routes;