'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_code extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  service_code.init({
    service_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Service Code already exist"},
      validate: {
        isNumeric: {msg: "Please input only numbers for service_code"},
        notNull: {msg: "service_code is required"},
        notEmpty: {msg: "service_code is required"}
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Name already exist in other Service Code"},
      validate: {
        notNull: {msg: "name is required"},
        notEmpty: {msg: "name is required"}
      }
    },
    version: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "version is required"},
        notEmpty: {msg: "version is required"}
      }
    },
    http_method: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "http_method is required"},
        notEmpty: {msg: "http_method is required"}
      }
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Path already exist for another Service code"},
      validate: {
        notNull: {msg: "path is required"},
        notEmpty: {msg: "path is required"}
      }
    }
  }, {
    sequelize,
    modelName: 'service_code',
    tableName: 'service_code',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return service_code;
};