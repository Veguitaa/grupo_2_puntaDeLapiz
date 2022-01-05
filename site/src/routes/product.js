var express = require('express');
var router = express.Router();
const { product } = require('../controllers/productController')
const authUser = require('../middlewares/authUser')


/* GET home page. */
router.get('/:id/', /* authUser, */ product);


module.exports = router;
