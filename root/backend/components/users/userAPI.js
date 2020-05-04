module.exports = function(router, userController) {
	router.get('/users', userController.get_all_users);
	router.get('/users/:id', userController.get_users_by_id);
	router.post('/users', userController.add_users);
	router.put('/users/:id', userController.update_users);
	router.delete('/users/:id', userController.delete_users);

	return router;
};