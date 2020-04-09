const router = require('express').Router();
const User = require('../models/user.model');
const { getAllUsers,
  getUsersById,
  addUsers,
  updateUsers,
  deleteUsers } = require('../controllers/userController');

router.get('/users', getAllUsers);
router.get('/users/:id', getUsersById);
router.post('/users', addUsers);
router.put('/users/:id', updateUsers);
router.delete('/users/:id', deleteUsers);

module.exports = router;