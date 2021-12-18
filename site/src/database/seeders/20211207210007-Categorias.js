'use strict';

let categorias = [
    {
      nombre: 'Libreria',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Papeleria',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Oficina',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      nombre: 'Estudiante',
      createdAt: new Date,
      updatedAt: new Date
    },
  ]

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Categorias', categorias, {});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Categorias', null, {});
  }
};
