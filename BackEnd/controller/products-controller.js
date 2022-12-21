const Product = require('../models/productModel');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find();

      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
      // another common pattern
      // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET,OPTIONS,PATCH,DELETE,POST,PUT'
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      );

      res.json({
        msg: 'success get all Product',
        data: allProducts,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  getProductById: async (req, res) => {
    try {
      const id = req.params.id;
      let data = '';

      const productData = await Product.findById(id).then((result) => {
        data = result;

        return data;
      });

      res.json({
        msg: 'success get product by id',
        data,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  addProduct: async (req, res) => {
    try {
      const productData = req.body;

      const data = new Product(productData);

      data.save();

      res.json({
        msg: 'success add product',
        data: productData,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  deleteProductById: async (req, res) => {
    try {
      const id = req.params.id;
      await Product.findByIdAndDelete(id);
      const dataExisting = await Product.find();
      res.json({
        msg: 'success delete product',
        data: dataExisting,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  editProduct: async (req, res) => {
    try {
      const id = req.params.id;
      var conditions = { _id: id };
      await Product.updateOne(conditions, req.body);

      const dataExisting = await Product.find();
      res.json({
        msg: 'sucess edit Product',
        data: dataExisting,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
};
