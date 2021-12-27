const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
    product:  (req, res,) => {
      const {id} = req.params
		  const productDetail = products.find(e => e.id === + id)

		res.render('product', {products, productDetail, products:JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))})
      }
    
}
