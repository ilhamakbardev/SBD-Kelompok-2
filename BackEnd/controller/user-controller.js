module.exports = {
  getAllUser: (req, res) => {
    res.json({
      msg: 'success get all user data',
    });
  },
  getUserById: (req, res) => {
    res.json({
      msg: 'success get user by id',
    });
  },
  addUser: (req, res) => {
    res.json({
      msg: 'account successfully created',
    });
  },
  deleteUserById: (req, res) => {
    res.json({
      msg: 'user by id has successfully removed',
    });
  },
  editUser: (req, res) => {
    try {
      res.json({
        msg: 'edit user successfull',
      });
    } catch (err) {
      console.log(err);
    }
  },
};
