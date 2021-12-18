'use strict';

let productos = require("../../data/productsDataBase.json")

let productosModificados = productos.map(producto => {

    let categoria
    if(producto.category.toLowerCase() === "Libreria"){
        categoria = 1
    } else if(producto.category.toLowerCase() === "Papeleria"){
        categoria = 2
    } else if(producto.category.toLowerCase() === "Oficina"){
        categoria = 3
    } else {
        categoria = 4
    }
    return {
        nombre: producto.name,
        marca: producto.mark,
        precio: producto.price,
        imagen: producto.image,
        descuento: producto,discount,
        stock: producto.stock,
        descripcion: producto.description,
        categoriaId: categoria,
        createdAt: new Date,
        updateAt: new Date
    }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Productos', productos, {});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Productos', null, {});
  }
};
