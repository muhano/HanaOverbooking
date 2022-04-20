'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_core', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      org_name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      org_id: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      merchant_name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      merchant_id: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      terminal_name: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      terminal_id: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      cif: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      account: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      limit: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      channel: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      partners_id: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_process_core');
  }
};