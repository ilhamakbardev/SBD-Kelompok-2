module.exports = {
  getAllProducts: (req, res) => {
    res.json({
      msg: 'success get all products',
    });
  },
  getProductById: (req, res) => {
    res.json({
      msg: 'success get product by id',
    });
  },
  addProduct: (req, res) => {
    res.json({
      msg: 'success add product',
    });
  },
  deleteProductById: (req, res) => {
    res.json({
      msg: 'success delete product',
    });
  },
  editProduct: (req, res) => {
    res.json({
      msg: 'sucess edit products',
    });
  },
};
