'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_cores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      org_name: {
        type: Sequelize.STRING
      },
      org_id: {
        type: Sequelize.INTEGER
      },
      merchant_name: {
        type: Sequelize.INTEGER
      },
      merchant_id: {
        type: Sequelize.INTEGER
      },
      terminal_name: {
        type: Sequelize.STRING
      },
      terminal_id: {
        type: Sequelize.INTEGER
      },
      cif: {
        type: Sequelize.INTEGER
      },
      account: {
        type: Sequelize.INTEGER
      },
      limit: {
        type: Sequelize.INTEGER
      },
      channel: {
        type: Sequelize.STRING
      },
      partners_id: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_process_cores');
  }
};