'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_process_fee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_process_fee.init({
    reff_num: DataTypes.INTEGER,
    merchant_id: DataTypes.INTEGER,
    merchant_name: DataTypes.INTEGER,
    channel: DataTypes.STRING,
    bank_reff_num: DataTypes.INTEGER,
    transaction_time: DataTypes.STRING,
    transaction_type: DataTypes.STRING,
    amount: DataTypes.STRING,
    fee: DataTypes.INTEGER,
    service_name: DataTypes.STRING,
    remarks: DataTypes.STRING,
    response_code: DataTypes.INTEGER,
    transaction_status: DataTypes.STRING,
    transaction_desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_process_fee',
    tableName: 'data_process_fee',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return data_process_fee;
};