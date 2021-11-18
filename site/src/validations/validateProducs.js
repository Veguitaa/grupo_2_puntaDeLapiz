const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage('el nombre es obligatorio'),
    check('mark')
        .notEmpty().withMessage('debe colocar la marca del producto'),
    check('price')
        .notEmpty().withMessage('el precio del producto es obligatorio').bail()
        .isInt().withMessage('el precio debe ser un numero'),
    check('stock')
        .notEmpty().withMessage('debe colocar la marca de stock disponible'),
    check('description')
        .isLength({ min : 20 }).withMessage('la descipción debe contener minimo 20 caracteres')

]
