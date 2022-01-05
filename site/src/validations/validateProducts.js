const {check} = require('express-validator');



module.exports = [

    check('nombre')
        .notEmpty().withMessage('El campo nombre es requerido').bail()
        .isLength({min: 3}).withMessage('El nombre tiene que tener al menos 3 caracteres'),
    check('marca')
        .notEmpty().withMessage('debe colocar la marca del producto').bail()
        .isLength({min: 3}).withMessage('El nombre tiene que tener al menos 3 caracteres'),
    check('precio')
        .notEmpty().withMessage('el precio del producto es obligatorio').bail()
        .isInt().withMessage('el precio debe ser un numero'),
    check('stock')
        .notEmpty().withMessage('debe ingresar el stock del producto').bail()
        .isInt().withMessage('el stock debe ser un numero'),
    check('descripcion')
        .notEmpty().withMessage('se necesita una descripcion del producto').bail()
        .isLength({ min : 20 }).withMessage('la descripcion debe contener minimo 20 caracteres')

]
