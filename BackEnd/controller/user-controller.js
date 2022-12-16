const { User } = require('../models');

module.exports = {
  getAllUser: async (req, res) => {
    const allUser = await User.findAll();
    res.json({
      msg: 'success get all user data',
      data: allUser,
    });
  },
  getUserById: async (req, res) => {
    const id = req.params.id;
    const getUser = await User.findByPk(id);
    res.json({
      msg: 'success get user by id',
      data: getUser,
    });
  },
  addUser: async (req, res) => {
    const user = req.body;
    await User.create(user);

    res.json({
      msg: 'user created',
      data: user,
    });
  },
  deleteUserById: async (req, res) => {
    const id = req.params.id;
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    res.json({
      msg: 'user by id has successfully removed',
    });
  },
  editUser: async (req, res) => {
    const id = req.params.id;
    const editData = req.body;
    await User.update(editData, {
      where: { id },
    });
    res.json({
      msg: 'edit user successfull',
    });
  },
};
