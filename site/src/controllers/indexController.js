const fs = require('fs');
const path = require('path');

let db = require('../database/models');


module.exports = {
    index:  (req, res,) => {
      db.Productos.findAll({
       include : [{all:true}]
      })
      .then(productos =>{
        return res.render('index',{
          productos
      })
      })
      .catch((error) => res.send(error))
    }

}
/* const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    index:  (req, res,) => {
        products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('index', {products})
      }
}
 */