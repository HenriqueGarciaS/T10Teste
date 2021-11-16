const express = require('express');
const routes = express.Router();

const testeController = require('./Controller/TesteController');


routes.get('/',(req,res) =>{
    return res.json({text:"Hello World"})
})

routes.get('/teste/:id',testeController.findOne);

routes.post('/teste',testeController.store)

module.exports = routes;