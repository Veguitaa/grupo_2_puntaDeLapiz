const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require("../database/models")


module.exports = {
  
      user:  (req, res,) => {
        const {id} = req.params
        const userData = usuariosRegistrados.find(e => e.id === + id)
        res.render('users/user',{usuariosRegistrados, userData, products})
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
        const errors = validationResult(req)

        if(req.fileValidationError){

            let image = {
                param: "image",
                msg: req.fileValidationError
            }
            errors.errores.push(image)
        }

        if (errors.isEmpty()) {
            

            const {nombre, apellido, email, password1, direccion, usuario} = req.body
            
            db.Usuario.create({
                nombre,
                apellido,
                email,
                contraseña: bcrypt.hashSync(password1.trim(),10),
                direccion,
                usuario,
                avatar: req.file.filename?req.file.filename:"imagenpordefecto.jpg",
                rolId: 2

            })

            .then(usuario => {
                req.session.userLogin = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    avatar: usuario.avatar,
                    rol: usuario.rolId
                }
                if(recordar){
                    res.cookie("PuntaDeLapiz", req.session.userLogin, {
                        maxAge: 1000* 60 *60
                    })
                }
                return res.redirect("users/profile")
            })

            .catch(error => {
                res.send(error)
            })


        } else {
            
            res.render('users/register',  {errors: errors.mapped(), old: req.body})
        }
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
                req.session.userLogin = {
                    id: usuario.id,
                    nombre: usuario.nombre,
                    avatar: usuario.avatar,
                    rol: usuario.rolId
                }
                if(recordar){
                    res.cookie("PuntaDeLapiz", req.session.userLogin, {
                        maxAge: 1000* 60 *60
                    })
                }
                return res.redirect("users/profile")
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