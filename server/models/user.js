'use strict';
const {hashPassword} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {msg: "Email already registered"},
      validate: {
        isEmail: {msg: "Invalid email format"},
        notNull: {msg: "Email is required"},
        notEmpty: {msg: "Email is required"}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Password is required"},
        notEmpty: {msg: "Password is required"},
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'user',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  user.beforeCreate((user, options) => {
    user.password = hashPassword(user.password)
  });

  return user;
};