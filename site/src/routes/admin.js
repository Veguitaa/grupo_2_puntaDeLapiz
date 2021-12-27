var express = require('express');
var router = express.Router();

const multer = require('multer')
const path = require('path')

const { list, create, edit,store, destroy, update } = require('../controllers/adminController')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/productsimg')
    },
    filename: function (req, file, cb) {
      cb(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
  const upload = multer({ storage: storage })

/* GET home page. */

router.get('/', list);


router.get('/create', create);
router.post('/', upload.single('image'),store); 


router.get('/edit/:id/', edit);
router.put('/edit/:id', update); 


router.delete('/:id/', destroy); 



module.exports = router;
