var express = require('express');
var router = express.Router();
const { product } = require('../controllers/productController')

/* GET home page. */
router.get('/:id/',product);


module.exports = router;
