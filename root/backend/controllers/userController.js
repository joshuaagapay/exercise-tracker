const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json('No Users Yet!');
    throw new Error(err);
  }
}

const getUsersById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await User.findById(id);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json('No User found');
    throw new Error(err);
  }

}

const addUsers = async (req, res) => {
  const newUser = new User({
    username: req.body.username
  });

  try {
    const data = await newUser.save();
    res.status(200).json({ message: 'Successfully Added', user: data })
  } catch (err) {
    res.status(500).json('User Already Excist');
    throw new Error(err);
  }
}

const updateUsers = async (req, res) => {
  const id = req.params.id;
  let user;
  try{
    user = await User.findById(id);
  }catch(err){
    res.status(500).json('No User Found');
    throw new Error(err);
  }

  if(user){
    user.username = req.body.username;
    try{
      const data = await user.save();
      res.status(200).json(`Successfully Updated ${data.username}`);  
    }catch(err){
      res.status(500).json(`Error ${err}`);
      throw new Error(err);
    }
  }
}

const deleteUsers = async (req, res) => {
  const id = req.params.id;
  
  try{
    const data = await User.findByIdAndDelete(id);
    res.status(200).json(`Successfully Deleted  ${data.username}`);
  }catch(err){
    res.status(500).json('No User Found');
    throw new Error(err);
  }
}

module.exports = {
  getAllUsers,
  getUsersById,
  addUsers,
  updateUsers,
  deleteUsers
};