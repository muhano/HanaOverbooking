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
        type: Sequelize.INTEGER(20)
      },
      merchant_id: {
        type: Sequelize.INTEGER(25)
      },
      merchant_name: {
        type: Sequelize.INTEGER(25)
      },
      channel: {
        type: Sequelize.STRING(50)
      },
      bank_reff_num: {
        type: Sequelize.INTEGER(20)
      },
      transaction_time: {
        type: Sequelize.STRING(250)
      },
      transaction_type: {
        type: Sequelize.STRING(250)
      },
      amount: {
        type: Sequelize.STRING(250)
      },
      fee: {
        type: Sequelize.INTEGER(20)
      },
      service_name: {
        type: Sequelize.STRING(250)
      },
      remarks: {
        type: Sequelize.STRING(250)
      },
      response_code: {
        type: Sequelize.INTEGER(20)
      },
      transaction_status: {
        type: Sequelize.STRING(100)
      },
      transaction_desc: {
        type: Sequelize.STRING(100)
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