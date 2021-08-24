const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/producto',(req,res) => res.sendFile(path.join(__dirname,'views','product.html')))
app.get('/carrito',(req,res) => res.sendFile(path.join(__dirname,'views','cart.html')))
app.get('/logeo',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/registro',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))


app.listen(port,() => console.log('Servidor funcionando en el puerto ' + port))
