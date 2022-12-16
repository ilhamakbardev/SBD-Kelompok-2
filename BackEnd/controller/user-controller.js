const User = require('../models/userModel');

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const allUser = await User.find();
      res.json({
        msg: 'success get all user data',
        data: allUser,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  getUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const getUser = await User.findById(id);
      res.json({
        msg: 'success get user by id',
        data: getUser,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  addUser: async (req, res) => {
    try {
      const data = req.body;
      const user = new User(data);

      user.save();

      res.json({
        msg: 'user created',
        data: user,
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const id = req.params.id;

      await User.findByIdAndDelete(id);

      res.json({
        msg: 'user by id has successfully removed',
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
  editUser: async (req, res) => {
    try {
      const id = req.params.id;
      const editData = req.body;

      await User.updateOne({ _id: id }, editData);

      res.json({
        msg: 'edit user successfull',
      });
    } catch (err) {
      res.json({
        error: `${err.message}`,
      });
    }
  },
};
