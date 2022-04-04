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
    org_name: DataTypes.STRING,
    org_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for org_id"}
      }
    },
    merchant_name: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_name"}
      }
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_id"}
      }
    },
    terminal_name: DataTypes.STRING,
    terminal_id: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for terminal_id"}
      }
    },
    cif: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for cif"}
      }
    },
    account: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for account"}
      }
    },
    limit: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: {msg: "Please input only numbers for limit"}
      }
    },
    channel: DataTypes.STRING,
    partners_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_process_core',
    tableName: 'data_process_core',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return data_process_core;
};