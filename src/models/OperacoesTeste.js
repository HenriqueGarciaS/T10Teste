const {Model,DataTypes} = require('sequelize');

class OperacoesTeste extends Model{

    static init(connection){
        super.init({
            guid:DataTypes.STRING,
            utcCreationTime:DataTypes.STRING,
            utcLastChanged:DataTypes.STRING,
            tipoOp:DataTypes.STRING,
            valor:DataTypes.DECIMAL,
            guidMov:DataTypes.STRING,
            descricao:DataTypes.STRING
        },{
            sequelize:connection
        })
    }
}

module.exports = OperacoesTeste