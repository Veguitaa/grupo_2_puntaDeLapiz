'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Productos.belongsTo(models.Categorias,{
        as: "categorias",
        foreignKey: {
          name: "categoriaId"
        }
      })
    }
  };
  Productos.init({
    nombre: DataTypes.STRING,
    marca: DataTypes.STRING,
    imagen: DataTypes.STRING,
    precio: DataTypes.DECIMAL(10,2),
    descuento: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};