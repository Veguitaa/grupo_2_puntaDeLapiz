var express = require('express');
var router = express.Router();
const { user, login, register, processRegister, processLogin, check, logout } = require('../controllers/usersController')
const validate = require('../validations/validateRegister')
const guestUser = require('../middlewares/guestUser')
/* const upload = require('../middlewares/multerUser') */


/* GET home page. */

router.get('/user/:id/', user);

router.get('/register', guestUser, register)
router.post('/register', validate, processRegister)

router.get('/login', guestUser, login)
router.post('/login', processLogin)


router.get('/logueado', check)


router.get('/logout', logout)



module.exports = router;
