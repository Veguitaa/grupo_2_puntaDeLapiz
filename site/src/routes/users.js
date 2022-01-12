var express = require('express');
var router = express.Router();


const { user, login, register, processRegister, processLogin, check, logout } = require('../controllers/usersControllerDB')


const validate = require('../validations/validateRegister')
const validateLogin = require('../validations/validateLogin')
const guestUser = require('../middlewares/guestUser')
const upload = require('../middlewares/multerUser')


/* GET home page. */

router.get('/user/:id/', user);

router.get('/register', guestUser, register)
router.post('/register', upload.single("imagen"), /* validate, */ processRegister)

router.get('/login', guestUser, login)
router.post('/login',/* validateLogin, */ processLogin)


router.get('/logueado', check)


router.get('/logout', logout)



module.exports = router;
