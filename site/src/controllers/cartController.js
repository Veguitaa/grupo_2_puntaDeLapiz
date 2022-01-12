const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



module.exports = {
    cart:  (req, res,) => {
      products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render('cart', {products})
      },
      checkout:  (req, res,) => {
        res.render('checkout')
      }
}
