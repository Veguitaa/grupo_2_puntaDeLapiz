
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require("../database/models")


module.exports = {
  
      user:  (req, res,) =>  {
        /* db.Usuarios.findAll({
          include : [{all:true}]
         })
         .then(usuario =>{
           return res.render('users/user',{
             usuario
         })
         })
         .catch((error) => res.send(error))

 */

         db.Usuarios.findByPk(req.params.id,{
            include : [{all:true}]
           })
                .then(usuario =>{
                    return res.render("users/user",{
                        usuario
                })
                })
                .catch(error => console.log(error))
        
        


      },

      
     


  


      login:  (req, res,) => {
        res.render('users/login')
      },


      register:  (req, res,) => {
        res.render('users/register')
      },


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       Proceso de registro 
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/


      processRegister: (req, res) => {
        






        let errores = validationResult(req);

        if (errores.isEmpty()) {
            const {nombre, apellido, email, password1, direccion, usuario} = req.body
          
    
          db.Usuarios.create({
            nombre,
            apellido,
            email,
            contraseña:bcrypt.hashSync(password1.trim(),10),
            direccion,
            usuario,
            avatar: req.file.filename?req.file.filename:'default-image.png',
            rolId: 2

        })
            .then((usuario) => {
                req.session.usuarioLogueado = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    avatar: usuario.avatar,
                    rol: usuario.rolId
              };
              return res.redirect("/");
            })
            .catch((error) => console.log(error));
        } else {
          return res.render("user/register", {
            errores: errores.mapped(),
            old: req.body,
          });
        }
        res.redirect("/users/login");










    },






























    

    processLogin: (req, res) => {

        const errors = validationResult(req)

        if (errors.isEmpty()) {

            const {email, recordar} = req.body

            db.Usuarios.findOne({
                where: {
                    email
                }
            })
            .then(usuario => {
                req.session.usuarioLogueado = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    avatar: usuario.avatar,
                    rol: usuario.rolId
                }
                if(recordar){
                    res.cookie("PuntaDeLapiz", req.session.usuarioLogueado, {
                        maxAge: 1000* 60 *60
                    })
                }
                return res.redirect(`/users/user/${usuario.id}`)
            })
            .catch(error => {
                res.send(error)
            })
            

        } else {
            
            res.render('users/login')
        }
    },


    

    check: (req, res) => {
        if (req.session.usuarioLogueado !== undefined) {
            res.send(`El usuario logueado es ${req.session.usuarioLogueado.email}`)
        } else {
            res.send('Usuario no logueado')
        }
    },


    logout: (req, res) => {

        req.session.destroy()
        if (req.cookies.recordarme !== undefined) {
            res.cookie('recordarme', '', {maxAge: -1})
        }
        res.redirect('/')
    }
}