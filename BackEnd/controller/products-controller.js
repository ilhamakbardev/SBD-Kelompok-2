const Product = require('../models/productModel');

module.exports = {
  getAllProducts: async (req, res) => {
    const allProducts = await Product.find();
    res.json({
      msg: 'success get all Product',
      data: allProducts,
    });
  },
  getProductById: async (req, res) => {
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
  },
  addProduct: async (req, res) => {
    const productData = req.body;

    const data = new Product(productData);

    data.save();

    res.json({
      msg: 'success add product',
      data: productData,
    });
  },
  deleteProductById: async (req, res) => {
    const id = req.params.id;

    await Product.findByIdAndDelete(id);

    const dataExisting = await Product.find();
    res.json({
      msg: 'success delete product',
      data: dataExisting,
    });
  },
  editProduct: async (req, res) => {
    const id = req.params.id;
    var conditions = { _id: id };

    await Product.updateOne(conditions, req.body);

    res.json({
      msg: 'sucess edit Product',
    });
  },
};
