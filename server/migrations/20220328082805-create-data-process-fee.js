'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_fees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reff_num: {
        type: Sequelize.INTEGER
      },
      merchant_id: {
        type: Sequelize.INTEGER
      },
      merchant_name: {
        type: Sequelize.INTEGER
      },
      channel: {
        type: Sequelize.STRING
      },
      bank_reff_num: {
        type: Sequelize.INTEGER
      },
      transaction_time: {
        type: Sequelize.STRING
      },
      transaction_type: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
      fee: {
        type: Sequelize.INTEGER
      },
      service_name: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      response_code: {
        type: Sequelize.INTEGER
      },
      transaction_status: {
        type: Sequelize.STRING
      },
      transaction_desc: {
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
    await queryInterface.dropTable('data_process_fees');
  }
};