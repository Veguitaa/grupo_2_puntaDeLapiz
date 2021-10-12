var express = require('express');
var router = express.Router();
const { user, login, register } = require('../controllers/usersController')

/* GET home page. */

router.get('/user/:id/', user);

router.get('/register', register);

router.get('/login', login);



module.exports = router;
