const Teste = require('../models/Teste');


module.exports = {

    async store(req,res){

        const{nome} = req.body;

       const teste = await Teste.create({
           nome:nome
       });

       return res.json(teste);

    },

    async findOne(req,res){

        const {id} = req.body;
       
        const teste = await Teste.findByPk(id);

        if(!teste)
        return res.status(404).json("Teste não encontrado");
        return res.json(teste);

    }




}