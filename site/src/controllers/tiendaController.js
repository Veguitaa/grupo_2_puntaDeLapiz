const fs = require('fs');
const path = require('path');

let db = require('../database/models');


module.exports = {
    index:  (req, res,) => {
      db.Productos.findAll({
       include : [{all:true}]
      })
      .then(productos =>{
        return res.render('tienda',{
          productos
      })
      })
      .catch((error) => res.send(error))
    }

}