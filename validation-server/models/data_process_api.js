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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for org_id"},
        notNull: {msg: "org_id is required"},
        notEmpty: {msg: "org_id is required"}
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
    client_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "client_id already registered"},
      validate: {
        notNull: {msg: "client_id is required"},
        notEmpty: {msg: "client_id is required"}
      }
    },
    client_secret: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "client_secret is required"},
        notEmpty: {msg: "client_secret is required"}
      }
    },
    public_key: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {msg: "public_key is required"},
        notEmpty: {msg: "public_key is required"}
      }
    },
    private_key: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {msg: "private_key is required"},
        notEmpty: {msg: "private_key is required"}
      }
    },
    host_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "host_name is required"},
        notEmpty: {msg: "host_name is required"}
      }
    },
    ip_address: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {msg: "ip_address is required"},
        notEmpty: {msg: "ip_address is required"}
      }
    },
    service_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {msg: "service_name is required"},
        notEmpty: {msg: "service_name is required"}
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    service_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for service_code"},
        notNull: {msg: "service_code is required"},
        notEmpty: {msg: "service_code is required"},
        len: {
          args: [4],
        msg: "Minimum character length for service_code is 4"}
      }
    }
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