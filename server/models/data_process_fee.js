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
    reff_num: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for reff_num"},
        notNull: {msg: "reff_num is required"},
        notEmpty: {msg: "reff_num is required"}
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
    merchant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for merchant_name"},
        notNull: {msg: "merchant_name is required"},
        notEmpty: {msg: "merchant_name is required"}
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
    bank_reff_num: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for bank_reff_num"},
        notNull: {msg: "bank_reff_num is required"},
        notEmpty: {msg: "bank_reff_num is required"}
      }
    },
    transaction_time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "transaction_time is required"},
        notEmpty: {msg: "transaction_time is required"}
      }
    },
    transaction_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "transaction_type is required"},
        notEmpty: {msg: "transaction_type is required"}
      }
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "amount is required"},
        notEmpty: {msg: "amount is required"}
      }
    },
    fee: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for fee"},
        notNull: {msg: "fee is required"},
        notEmpty: {msg: "fee is required"}
      }
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "service_name is required"},
        notEmpty: {msg: "service_name is required"}
      }
    },
    remarks: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "remarks is required"},
        notEmpty: {msg: "remarks is required"}
      }
    },
    response_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {msg: "Please input only numbers for response_code"},
        notNull: {msg: "response_code is required"},
        notEmpty: {msg: "response_code is required"}
      }
    },
    transaction_status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "transaction_status is required"},
        notEmpty: {msg: "transaction_status is required"}
      }
    },
    transaction_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "transaction_desc is required"},
        notEmpty: {msg: "transaction_desc is required"}
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'data_process_fee',
    tableName: 'data_process_fee',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return data_process_fee;
};