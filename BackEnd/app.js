const express = require('express');

const app = express();
const cors = require('cors');
require('express-async-errors');

const cartRouter = require('./controllers/cart_products');
const productsRouter = require('./controllers/products');
// const nodemailRouter = require('./controllers/nodemail');

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/api/products', productsRouter);
app.use('/api/cart_products', cartRouter);
// app.use('/send', nodemailRouter);

// send index file when backwards to page from other site
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

module.exports = app;
