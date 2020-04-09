const User = require('../models/user.model');

const getAllUsers = (req, res) => {
  User.find({}).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json('No Users Yet!');
    throw err;
  })
}

const getUsersById = (req, res) => {
  const id = req.params.id;

  User.findById(id).then(data => {
    res.status(200).json(data);
  }).catch(err => {
    res.status(500).json('No User found');
    throw err;
  })
}

const addUsers = (req, res) => {
  const newUser = new User({
    username: req.body.username
  });

  newUser.save().then(data => {
    res.status(200).json({ message: 'Successfully Added', user: data });
  }).catch(err => {
    res.status(500).json('User Already Excist');
    throw err;
  })
}

const updateUsers = (req, res) => {
  const id = req.params.id;
  User.findById(id).then((user) => {
    user.username = req.body.username;
    user.save().then(() => {
      res.json('Successfully Updated');
    }).catch(err => {
      res.status(500).json('Error' + err)
    })
  }).catch(err => {
    res.status(500).json('Error' + err)
  });
}

const deleteUsers = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id).then((user) => {
    res.status(200).json(`Successfully Deleted  ${user.username}`);
  }).catch(err => {
    res.satus(500).json('No User Found');
    throw err;
  });
}
module.exports = {
  getAllUsers,
  getUsersById,
  addUsers,
  updateUsers,
  deleteUsers
};