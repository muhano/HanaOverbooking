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
        type: Sequelize.INTEGER
      },
      merchant_id: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.STRING
      },
      client_secret: {
        type: Sequelize.STRING
      },
      public_key: {
        type: Sequelize.STRING
      },
      private_key: {
        type: Sequelize.STRING
      },
      host_name: {
        type: Sequelize.STRING
      },
      ip_address: {
        type: Sequelize.TEXT
      },
      service_name: {
        type: Sequelize.TEXT
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