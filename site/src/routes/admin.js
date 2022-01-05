var express = require('express');
var router = express.Router();

const upload = require('../middlewares/multerproduct') /* required multer */
/* const path = require('path') */

const validate = require('../validations/validateProducts')

const { list, create, edit, store, destroy, update } = require('../controllers/adminControllerDB')


/* GET home page. */

router.get('/', list);


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       ruta creacion producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

router.get('/create', create);
router.post('/create', upload.single('image'), validate, store); 


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       ruta edicion producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

router.get('/edit/:id/', edit);
router.put('/edit/:id', upload.single('image'), validate, update); 


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       ruta eliminacion producto
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

router.delete('/:id/', destroy); 



module.exports = router;
