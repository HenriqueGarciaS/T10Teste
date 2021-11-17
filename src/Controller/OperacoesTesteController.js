const { findAll, findOne } = require('../models/Teste');
const OperacoesTeste = require('../models/OperacoesTeste');

module.exports = {
    async store(req,res){

        const {guid,utcCreationTime,utcLastChangedTime,tipoOp,valor,guidMov,descricao} = req.body;

        OperacoesTeste.removeAttribute("id");

        const operacao = await OperacoesTeste.create({
            guid:guid,
            utcCreationTime:utcCreationTime,
            utcLastChanged:utcLastChangedTime,
            tipoOp:tipoOp,
            valor:parseFloat(valor),
            guidMov:guidMov,
            descricao:descricao
        });

        return res.json(operacao);



    },

    async findOne(req,res){
        const{guid} = req.body;

        OperacoesTeste.removeAttribute("id");
        
        const operacao = await OperacoesTeste.findOne({
            where:{
                guid:guid
            }
        });

        

        if(!operacao)
        return res.status(400).Json("Operação não encontrada");

        return res.json(operacao);
    },

    async findAll(req,res){

        OperacoesTeste.removeAttribute("id");

        const operacao = await OperacoesTeste.findAll();

        

        return res.json(operacao);


    }
}