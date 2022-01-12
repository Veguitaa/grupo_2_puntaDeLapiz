var express = require('express');
var router = express.Router();
const { product, destroy } = require('../controllers/productController')




/* GET home page. */
router.get('/:id/', product);

router.delete('/:id/', destroy);


module.exports = router;
