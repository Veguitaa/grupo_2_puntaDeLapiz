const { check } = require('express-validator')



module.exports = [

    check('user_name')
        .notEmpty().withMessage('El campo nombre es requerido').bail()
        .isLength({min: 3}).withMessage('El nombre tiene que tener al menos 3 caracteres'),
    check('email')
        .notEmpty().withMessage('El campo email es requerido').bail()
        .isEmail().withMessage('Email inválido'),
    check('password1')
        .notEmpty().withMessage('El campo contraseña es requerido').bail()
        .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),

]