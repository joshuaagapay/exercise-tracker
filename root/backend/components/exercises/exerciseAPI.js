module.exports = function(router, exerciseController) {
	router.get('/exercises', exerciseController.get_all_exercises);
	router.get('/exercises/:id', exerciseController.get_exercise_by_id);
	router.post('/exercises', exerciseController.add_exercise);
	router.put('/exercises/:id', exerciseController.update_exercise);
	router.delete('/exercises/:id', exerciseController.delete_exercise);

	return router;
};