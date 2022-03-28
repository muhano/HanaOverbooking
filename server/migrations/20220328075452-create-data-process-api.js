'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_apis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      org_id: {
        type: Sequelize.INTEGER(20)
      },
      merchant_id: {
        type: Sequelize.INTEGER(20)
      },
      client_id: {
        type: Sequelize.STRING(250)
      },
      client_secret: {
        type: Sequelize.STRING(250)
      },
      public_key: {
        type: Sequelize.STRING(250)
      },
      private_key: {
        type: Sequelize.STRING(250)
      },
      host_name: {
        type: Sequelize.STRING(100)
      },
      ip_address: {
        type: Sequelize.TEXT(250)
      },
      service_name: {
        type: Sequelize.TEXT(250)
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
    await queryInterface.dropTable('data_process_apis');
  }
};