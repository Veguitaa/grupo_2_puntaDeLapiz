var express = require('express');
var router = express.Router();
const { index, search,about,faq } = require('../controllers/indexController')


/* GET home page. */
router.get('/',  index);
router.get('/search',search)
router.get('/about',about)
router.get('/faq',faq)

module.exports = router;
