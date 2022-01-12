const fs = require('fs');
const path = require('path');

let db = require('../database/models');
const { Op, where } = require("sequelize");


module.exports = {
    index:  (req, res,) => {
      db.Productos.findAll({
       include : [{all:true}]
      })
      .then(productos =>{
        return res.render('index',{
          productos
      })
      })
      .catch((error) => res.send(error))
    },

    search: (req, res) => {

      let busqueda = req.query.busqueda.toLowerCase()
      let categories = db.Categorias.findAll()
      let productos = db.Productos.findAll({
          include: [{
              all: true
          }],
          where: {
              [Op.or]: [
                  { nombre: { [Op.substring]: `%${busqueda}%` } },
                  { marca: { [Op.substring]: `%${busqueda}%` } },
              ],
          }
      })
      Promise.all([categories,productos])
      .then(([categories,productos]) => {

          return res.render('search', {
              productos,
              categories
          })
      })
      .catch(error => console.log(error))
  },

  about:  (req, res,) => {
    res.render('about')
  }



}
