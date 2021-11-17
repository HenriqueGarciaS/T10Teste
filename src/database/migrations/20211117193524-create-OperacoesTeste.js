'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('OperacoesTeste',{
      guid:{
        primaryKey:true,
        type:Sequelize.STRING,
        autoIncrement:false,
        allowNull:false
      },
      utcCreationTime:{
        type:Sequelize.STRING,
        allowNull:false
      },
      utcLastChanged:{
        type:Sequelize.STRING,
        allowNull:false
      },
      tipoOp:{
        type:Sequelize.STRING,
        allowNull:false
      },
      valor:{
        type:Sequelize.DECIMAL,
        allowNull:false
      },
      guidMov:{
        type:Sequelize.STRING,
        allowNull:false
      },
      descricao:{
        type:Sequelize.STRING,
        allowNull:false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
  return queryInterface.dropTable("OperacoesTeste");
  }
};
