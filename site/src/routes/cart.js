var express = require('express');
var router = express.Router();
const { cart, checkout } = require('../controllers/cartController')
const authUser = require('../middlewares/authUser')
/* GET home page. */


router.get('/', cart);

router.get('/checkout', authUser, checkout);

module.exports = router;
