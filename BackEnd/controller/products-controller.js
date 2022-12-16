const { Products } = require('../models');

module.exports = {
  getAllProducts: async (req, res) => {
    const allProducts = await Products.findAll();
    res.json({
      msg: 'success get all products',
      data: allProducts,
    });
  },
  getProductById: async (req, res) => {
    const id = req.params.id;
    const productData = await Products.findAll({
      where: { id },
    });
    res.json({
      msg: 'success get product by id',
      data: productData,
    });
  },
  addProduct: async (req, res) => {
    const productData = req.body;
    await Products.create(productData);
    res.json({
      msg: 'success add product',
      data: productData,
    });
  },
  deleteProductById: async (req, res) => {
    const id = req.params.id;

    const deletedProduct = await Products.destroy({
      where: {
        id,
      },
    });

    res.json({
      msg: 'success delete product',
    });
  },
  editProduct: async (req, res) => {
    const id = req.params.id;
    const editData = req.body;
    await Products.update(editData, {
      where: { id },
    });
    res.json({
      msg: 'sucess edit products',
      data: editData,
      id,
    });
  },
};
