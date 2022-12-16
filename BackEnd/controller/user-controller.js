const User = require('../models/userModel');

module.exports = {
  getAllUser: async (req, res) => {
    const allUser = await User.find();
    res.json({
      msg: 'success get all user data',
      data: allUser,
    });
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    const getUser = await User.findById(id);
    res.json({
      msg: 'success get user by id',
      data: getUser,
    });
  },
  addUser: async (req, res) => {
    const data = req.body;
    const user = new User(data);

    user.save();

    res.json({
      msg: 'user created',
      data: user,
    });
  },
  deleteUserById: async (req, res) => {
    const id = req.params.id;

    await User.findByIdAndDelete(id);

    res.json({
      msg: 'user by id has successfully removed',
    });
  },
  editUser: async (req, res) => {
    const id = req.params.id;
    const editData = req.body;

    await User.updateOne({ _id: id }, editData);

    res.json({
      msg: 'edit user successfull',
    });
  },
};
