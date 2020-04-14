const router = require('express').Router();

const {
  get_all_exercises,
  get_exercise_by_id,
  add_exercise, 
  update_exercise,
  delete_exercise } = require('../controllers/exerciseController');

router.get('/exercises', get_all_exercises);
router.get('/exercises/:id', get_exercise_by_id);
router.post('/exercises', add_exercise);
router.put('/exercises/:id', update_exercise);
router.delete('/exercises/:id', delete_exercise);

module.exports = router;