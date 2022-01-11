var express = require('express');
var router = express.Router();
const { index } = require('../controllers/tiendaController')


/* GET home page. */
router.get('/tienda',  index);

module.exports = router;
