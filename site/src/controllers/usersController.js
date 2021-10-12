const fs = require('fs');
const path = require('path');

const usersPath = path.join(__dirname, '../data/usersDataBase.json');
const user = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));




module.exports = {
  
      user:  (req, res,) => {
        const {id} = req.params
		    const userData = user.find(e => e.id === + id)
        res.render('users/user',{user, userData, products})
      },

      login:  (req, res,) => {
        res.render('users/login')
      },

      register:  (req, res,) => {
        res.render('users/register')
      },
}