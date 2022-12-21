const express = require('express');
const {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProductById,
  editProduct,
} = require('../controller/products-controller');

const productRoute = express();

productRoute.get('/', getAllProducts);
productRoute.get('/:id', getProductById);
productRoute.post('/', addProduct);
productRoute.delete('/:id', deleteProductById);
productRoute.patch('/:id', editProduct);

module.exports = productRoute;
