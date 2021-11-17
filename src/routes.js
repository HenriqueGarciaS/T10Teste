const express = require('express');
const routes = express.Router();

const testeController = require('./Controller/TesteController');
const OperacoesTesteController = require('./Controller/OperacoesTesteController');


routes.get('/',(req,res) =>{
    return res.json({text:"rotas de teste : (POST) /teste/select body: id'numero' , (POST) /teste/insert body: nome'Texto'"})
})

routes.post('/operacoesTeste/insert',OperacoesTesteController.store);
routes.post('/operacoesTeste/select',OperacoesTesteController.findOne);
routes.get('/operacoesTeste/selectAll',OperacoesTesteController.findAll);

module.exports = routes;