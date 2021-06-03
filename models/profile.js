'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(11);
var hash = bcrypt.hashSync("password", salt);
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.hasOne(models.Kesatria)
      Profile.hasOne(models.Kembang)
    }
  };
  Profile.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^[A-Za-z_0-9]{3,15}$/,
          msg: `username hanya boleh huruf kapital, huruf kecil, angka, dan underscore`
        },
        notEmpty: {
          msg: `username harus di-isi`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: {
          args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{7,10}$/,
          msg: `password harus terdiri dari 7 char - 10 char, setidaknya  1 KAPITAL, 1 huruf kecil, 1 angka, dan 1 char khusus`
        },
        notEmpty: {
          msg: `password harus di-isi`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: `masukkan email dengan benar`
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  Profile.beforeCreate((instance) => {
    instance.password = bcrypt.hashSync(instance.password, salt);
  })
  return Profile;
};