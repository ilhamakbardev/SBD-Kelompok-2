const Product = require('../models/productModel');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const allProducts = await Product.find();
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

      res.json({
        msg: 'sucess edit Product',
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
};
