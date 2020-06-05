'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      surname: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      user_name: {
        type: Sequelize.STRING(12),
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        unique: true        
      },
      dt_of_bt: {
        type: Sequelize.DATE,
        allowNull: false        
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true
      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      update_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
