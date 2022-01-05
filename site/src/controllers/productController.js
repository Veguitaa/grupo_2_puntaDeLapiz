const fs = require('fs');
const path = require('path');

let db = require('../database/models');


module.exports = {
    product:  (req, res,) => {

      db.Productos.findByPk(req.params.id,{
        include : [{all:true}]
       })
            .then(productos =>{
                return res.render("product",{
                    productos
            })
            })
            .catch(error => console.log(error))
    
    }}
