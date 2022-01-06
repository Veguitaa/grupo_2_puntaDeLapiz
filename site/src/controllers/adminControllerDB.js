const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator')

let db = require('../database/models');
const { map } = require('../validations/validateProducts');



module.exports = {
  
    list:  (req, res,) => {
      db.Productos.findAll({
        include : [{all:true}]
       })
       .then(productos =>{
         return res.render('admin/adminproducts',{
           productos
       })
       })
       .catch((error) => res.send(error))
    },






      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       creacion producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/


    create: (req,res)=>{
      
      
      db.Categorias.findAll()
      .then(categorias => {
        return res.render('admin/create', {
          categorias
        })
      })
        .catch((error) => res.send(error))

    

    },

  store:  (req, res,) => {
   
    const errors = validationResult(req)

    if (errors.isEmpty()){
        const {nombre,marca,precio,stock,descuento,descripcion,categoriaId} = req.body
        categorias.map()
       /*  let objeto = {
          body:req.body,
          imagen:req.file
        }
        return res.send(objeto)
       */
        db.Productos.create({
          nombre: nombre.trim().toLowerCase(),
          marca,
          precio : +precio,
          stock : +stock,
          descuento : +descuento,
          descripcion : descripcion.trim(),
          categoriaId : +categoriaId,
          imagen: req.file.filename?req.file.filename:'default-image.png'
        })


       .then(() => {

        return res.redirect('/admin') 

        })
        .catch((error) => res.send(error))

    } 
    
      else {

        res.render('admin/create',  {errors: errors.mapped(), old: req.body})
        
    }

},





      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       Edicion producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

  edit:  (req, res,) => {

        let categorias = db.Categorias.findAll();
        let producto = db.Productos.findByPk(req.params.id,{
          include : [{all:true}]
         });
        Promise.all([categorias,producto])
        .then(([categorias,producto]) => {
            console.log(producto)
            return res.render('admin/edit',{
                categorias,
                producto
            })
        })
        .catch(error => console.log(error))

  
    },

    update: (req, res) => {

      /* return res.send(req.body) */
      const {nombre,marca,precio,stock,descuento,descripcion,categoriaId} = req.body

      db.Productos.update({
        nombre: nombre.trim().toLowerCase(),
        marca,
        precio : +precio,
        stock : +stock,
        descuento : +descuento,
        descripcion: descripcion.trim(),
        categoriaId : +categoriaId,
      },
            {
                where : {
                    id : req.params.id
                }
            }
      ).then( () =>   res.redirect('/admin'))
      .catch(error => console.log(error))
    
    
    },


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       Eliminacion Producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

       

    destroy : (req, res) => {

      db.Productos.destroy({
        where : {
            id : req.params.id
        }
    })
    .then( () => res.redirect('/admin')
    )
    .catch(error => console.log(error)
    ) 
    
  
  }
}