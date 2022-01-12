const {body,check} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models')

module.exports = [

    check('nombre')
        .notEmpty().withMessage('El campo nombre es requerido').bail()
        .isLength({min: 3}).withMessage('El nombre tiene que tener al menos 3 caracteres'),
    check('apellido')
        .notEmpty().withMessage('El apellido es requerido').bail()
        .isLength({min: 3}).withMessage('El apellido tiene que tener al menos 3 caracteres'),
    check('usuario')
        .notEmpty().withMessage('Nombre de requerido').bail()
        .isLength({min: 3}).withMessage('El usuario tiene que tener al menos 3 caracteres'),
        check('direccion')
        .notEmpty().withMessage('la direccion es requerida').bail(),
       /*  .isLength({min: 3}).withMessage('El usuario tiene que tener al menos 3 caracteres'), */
    check('email')
        .notEmpty().withMessage('El campo email es requerido').bail()
        .isEmail().withMessage('Email inválido'),
    check('password1')
        .notEmpty().withMessage('El campo contraseña es requerido').bail()
        .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),

]