const router = require('express').Router();
const User = require('../models/user.model');
const { 
  get_all_users,
  get_users_by_id,
  add_users,
  update_users,
  delete_users } = require('../controllers/userController');

router.get('/users', get_all_users);
router.get('/users/:id', get_users_by_id);
router.post('/users', add_users);
router.put('/users/:id', update_users);
router.delete('/users/:id', delete_users);

module.exports = router;