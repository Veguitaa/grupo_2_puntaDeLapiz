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
    productos = db.Productos.findAll({
        where: {
            [Op.or]: [
                { nombre: { [Op.substring]: req.query.search} },
                { descripcion: { [Op.substring]: req.query.search } },
            ],
        },
    });
    Promise.all([productos]).then(([productos]) => {
        res.render("search", {
            productos,
            title: "Busqueda:",
            search: req.query.search,
        });
    });
},



  about:  (req, res,) => {
    res.render('about')
  },

  faq:  (req, res,) => {
    res.render('faq')
  }



}
