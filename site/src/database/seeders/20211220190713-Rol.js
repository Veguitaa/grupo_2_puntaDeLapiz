'use strict';

let Roles = [
  {
    nombre: 'Admin',
    createdAt: new Date,
    updatedAt: new Date,
  },
  {
    nombre: 'Usuario',
    createdAt: new Date,
    updatedAt: new Date,
  },
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Rols', Roles, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Rols', null, {});
  }
};
