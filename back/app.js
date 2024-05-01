const express = require('express');
const path = require('path');
const productRoutes = require('./routes/product');

const app = express();

// app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../front')));
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
	res.sendFile('html/index.html', {root: '../front'});
});

app.get('/cart', (req, res) => {
	res.sendFile('html/cart.html', {root: '../front'});
});

// order matters here? cart need to be before /:id I guess ??
// otherwise product.js is loaded with cart.html page instead of cart.js

app.get('/:id', (req, res) => {
	res.sendFile('html/product.html', {root: '../front'});
});

app.post('/order', (req, res) => {
	res.sendFile('html/confirmation.html', {root: '../front'});
});

module.exports = app;