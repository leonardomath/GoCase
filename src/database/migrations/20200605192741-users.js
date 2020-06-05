'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: STRING(15),
        allowNull: false
      },
      surname: {
        type: STRING(15),
        allowNull: false
      },
      user_name: {
        type: STRING(12),
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: STRING(30),
        allowNull: false
      },
      cpf: {
        type: STRING(11),
        allowNull: false,
        unique: true        
      },
      dt_of_bt: {
        type: DATE,
        allowNull: false        
      },
      email: {
        type: STRING(30),
        allowNull: false,
        unique: true
      },
      create_at: {
        type: DATE,
        allowNull: false
      },
      update_at: {
        type: DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
