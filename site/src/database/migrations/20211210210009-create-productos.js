'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.DECIMAL(10,2)
      },
      stock: {
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.STRING
      },
      descuento: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"Categorias"
          },
          key:"id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Productos');
  }
};