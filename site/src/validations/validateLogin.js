const db = require("../database/models");

const {check, body} = require("express-validator");
const bcrypt = require("bcrypt");

module.exports = [
    check("email")
    .isEmail
    .withMessage("Debe ingresar un email valido"),

    body("email")
    .custom(function(value){

        return db.Usuario.findOne({
            where: {
                email: value
            }
        })
        .then(user => {
            if(!user){
                return Promise.reject("El usuario no esta registrado")
            }
        })
    }),

    body("pass")
    .custom(function(value, {req}){

        return db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(User => {
            if(!bcrypt.compareSync(value, User.dataValue.password)){
                return Promise.reject()
            }
        })
        .catch(() => {
            return Promise.reject("Contraseña incorrecta")
        })
    })
]