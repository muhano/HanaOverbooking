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
    org_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "org_name is required"},
        notEmpty: {msg: "org_name is required"}
      }
    },
    org_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for org_id"},
        notNull: {msg: "org_id is required"},
        notEmpty: {msg: "org_id is required"}
      }
    },
    merchant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_name"},
        notNull: {msg: "merchant_name is required"},
        notEmpty: {msg: "merchant_name is required"}
      }
    },
    merchant_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_id"},
        notNull: {msg: "merchant_id is required"},
        notEmpty: {msg: "merchant_id is required"}
      }
    },
    terminal_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "terminal_name is required"},
        notEmpty: {msg: "terminal_name is required"}
      }
    },
    terminal_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for terminal_id"},
        notNull: {msg: "terminal_id is required"},
        notEmpty: {msg: "terminal_id is required"}
      }
    },
    cif: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for cif"},
        notNull: {msg: "cif is required"},
        notEmpty: {msg: "cif is required"}
      }
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for account"},
        notNull: {msg: "account is required"},
        notEmpty: {msg: "account is required"}
      }
    },
    limit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for limit"},
        notNull: {msg: "limit is required"},
        notEmpty: {msg: "limit is required"}
      }
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "channel is required"},
        notEmpty: {msg: "channel is required"}
      }
    },
    partners_id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "partners_id is required"},
        notEmpty: {msg: "partners_id is required"}
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'data_process_core',
    tableName: 'data_process_core',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return data_process_core;
};