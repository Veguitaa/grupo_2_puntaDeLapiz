const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
  
    list:  (req, res,) => {
      res.render('admin/adminproducts', {products})
    },

  create:  (req, res,) => {
      res.render('admin/create', {products:JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))})
    },
      store: (req, res) => {
        const product = req.body
        product.id = products.length + 1
        product.image = req.file ? req.file.filename : 'default-image.png'
        products.push(product)
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 2))
    
        res.redirect(`/product/${product.id}`)
        
      },

  edit:  (req, res,) => {
    const product = products.find(e => e.id === +req.params.id)
      res.render('admin/edit', {product, products:JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))})
    },

    update: (req, res) => {
      const productUpdate = products.find(product => product.id === +req.params.id)
      const{name, mark, price, discount, category, description,stock} =req.body
      if(productUpdate){
        productUpdate.name = name
        productUpdate.mark = mark
        productUpdate.price = +price
        productUpdate.discount = +discount
        productUpdate.stock = +stock
        productUpdate.category = category
        productUpdate.description = description
  
  
        fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 2))
  
        res.redirect(`/product/${req.params.id}`)
  
      } else{
        res.redirect('/')
  
      }
    },




    destroy : (req, res) => {
      products = products.filter(product => product.id !== +req.params.id)
  
      fs.writeFileSync(productsFilePath, JSON.stringify(products,null, 2))
      res.redirect('/admin')
    }
}