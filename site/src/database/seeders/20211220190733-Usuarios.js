'use strict';

let bcryptjs = require("bcryptjs")

let contrasena = bcryptjs.hashSync("123456", 10)

let usuario = [
  {
    nombre: "Francisco",
    apellido: "Bulgarelli",
    email: "bulgarellifrancisco@gmail.com",
    contraseña: contrasena,
    direccion: "Calle falsa 123",
    usuario: "Fran26",
    avatar: "default-image.png",
    rolId: 2,
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Usuarios', usuario, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
