'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_process_core extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_process_core.init({
    id: DataTypes.INTEGER,
    org_name: DataTypes.STRING,
    org_id: DataTypes.INTEGER,
    merchant_name: DataTypes.INTEGER,
    merchant_id: DataTypes.INTEGER,
    terminal_name: DataTypes.STRING,
    terminal_id: DataTypes.INTEGER,
    cif: DataTypes.INTEGER,
    account: DataTypes.INTEGER,
    limit: DataTypes.INTEGER,
    channel: DataTypes.STRING,
    partners_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_process_core',
  });
  return data_process_core;
};