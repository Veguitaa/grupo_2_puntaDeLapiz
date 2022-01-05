const multer = require('multer');
const path = require('path');


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       carga de imagen
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/img/productsimg')
    },
    filename: function (req, file, cb) {
      cb(null, `img-${Date.now()}${path.extname(file.originalname)}`)
    },
  });


      /*:::::::::::::::::::::::::::::::::::::::::::::::::::
                       validacion imagen
       ::::::::::::::::::::::::::::::::::::::::::::::::::::*/
       
const fileFilter = function(req, file,callback) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp|jfif|svg)$/)){
        req.fileValidationError = "Solo se permite imágenes";
        return callback(null,false,req.fileValidationError);
    }
    callback(null,true);
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload