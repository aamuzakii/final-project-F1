'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kesatria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kesatria.belongsTo(models.Profile)
      Kesatria.belongsToMany(models.Kembang, {through: "Jodohs"})

    }
  };
  Kesatria.init({
    nama: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    tinggi: DataTypes.INTEGER,
    berat: DataTypes.INTEGER,
    pekerjaan: DataTypes.STRING,
    ProfileId: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kesatria',
    // tableName: 'Kesatrias'
  });
  return Kesatria;
};

