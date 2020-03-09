'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trains', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameTrain: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      typeTrain_id: {
        type: Sequelize.INTEGER
      },
      dateStart: {
        type: Sequelize.DATEONLY
      },
      startStation: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.TIME
      },
      destination: {
        type: Sequelize.STRING
      },
      arrivalTime: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trains');
  }
};