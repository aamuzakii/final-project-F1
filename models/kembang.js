'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kembang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kembang.belongsTo(models.Profile)
      Kembang.belongsToMany(models.Kesatria, {through: "Jodohs"})
    }

    getUsia () {
      return this.usia + ' ' + "tahun"
    }

    static sapa(param) {
      return "Mrs." + ' ' + param
    }
  };
  Kembang.init({
    nama: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    mahar: DataTypes.INTEGER,
    tinggi: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
    ProfileId: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kembang',
  });
  return Kembang;
};