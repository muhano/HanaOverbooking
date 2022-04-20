'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_process_api', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      org_id: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      merchant_id: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      client_id: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      client_secret: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      public_key: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      private_key: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      host_name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      ip_address: {
        allowNull: false,
        type: Sequelize.TEXT(250)
      },
      service_name: {
        allowNull: false,
        type: Sequelize.TEXT(250)
      },
      service_code: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('data_process_api');
  }
};