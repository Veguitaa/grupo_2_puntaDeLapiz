const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')


const ruta = path.join(__dirname,'..','data','usersDataBase.json')
let usuariosRegistrados = fs.readFileSync(ruta,'utf-8')
usuariosRegistrados = JSON.parse(usuariosRegistrados)
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




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

        if (errors.isEmpty()) {
        
            const usuario = {
                id: usuariosRegistrados[usuariosRegistrados.length - 1].id + 1,
                user_name: req.body.user_name,
                email: req.body.email,
                first_name: 'completar datos para realizar compras',
                password1: bcrypt.hashSync(req.body.password1, 10),
                avatar : req.file ? req.file.filename : 'default-image.png',
                
            }
        
            usuariosRegistrados.push(usuario)
        
            fs.writeFileSync(ruta, JSON.stringify(usuariosRegistrados, null, 2))
        
            res.redirect('/')
        } else {
            
            res.render('users/register',  {errors: errors.mapped(), old: req.body})
        }
    },






    processLogin: (req, res) => {

        const usuarioALoguear = usuariosRegistrados.find(usuario => usuario.email === req.body.email)

        if (usuarioALoguear && bcrypt.compareSync(req.body.password1, usuarioALoguear.password1)) {
            req.session.usuarioLogueado = usuarioALoguear
            if (req.body.Recordarme !== undefined) {
                res.cookie('recordarme', usuarioALoguear.email, {maxAge: 20*1000} )
            }
            res.redirect('/')
        } else {
            res.render('users/login', {errors: {msg: 'Email o contraseña incorrecta'}})
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