const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Leopard extends Model {
    static associate() {}
  }

  Leopard.init(
    {
      name: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Leopard',
    },
  );

  return Leopard;
};
