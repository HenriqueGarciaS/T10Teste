const {Model, DataTypes} = require('sequelize');

class Teste extends Model{

    static init(connection){
        super.init({
            nome:DataTypes.STRING
        },{
            sequelize:connection
        })
    }


}

module.exports = Teste