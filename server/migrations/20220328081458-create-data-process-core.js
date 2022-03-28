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
        type: Sequelize.STRING(50)
      },
      org_id: {
        type: Sequelize.INTEGER(20)
      },
      merchant_name: {
        type: Sequelize.INTEGER(25)
      },
      merchant_id: {
        type: Sequelize.INTEGER(20)
      },
      terminal_name: {
        type: Sequelize.STRING(50)
      },
      terminal_id: {
        type: Sequelize.INTEGER(20)
      },
      cif: {
        type: Sequelize.INTEGER(50)
      },
      account: {
        type: Sequelize.INTEGER(20)
      },
      limit: {
        type: Sequelize.INTEGER(20)
      },
      channel: {
        type: Sequelize.STRING(20)
      },
      partners_id: {
        type: Sequelize.STRING(20)
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