'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_fee', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reff_num: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      merchant_id: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      merchant_name: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      channel: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      bank_reff_num: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      transaction_time: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      transaction_type: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      amount: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      fee: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      service_name: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      remarks: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      response_code: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      transaction_status: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      transaction_desc: {
        allowNull: false,
        type: Sequelize.STRING(100)
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
    await queryInterface.dropTable('data_process_fee');
  }
};