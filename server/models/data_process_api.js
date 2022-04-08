'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_process_api extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_process_api.init({
    org_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for org_id"}
      }
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_id"}
      }
    },
    client_id: DataTypes.STRING,
    client_secret: DataTypes.STRING,
    public_key: DataTypes.STRING,
    private_key: DataTypes.STRING,
    host_name: DataTypes.STRING,
    ip_address: DataTypes.TEXT,
    service_name: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'data_process_api',
    tableName: 'data_process_api',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return data_process_api;
};