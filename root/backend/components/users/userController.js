const userDAL = require('./userDAL');

const get_all_users = async (req, res) => {

	try {
		const data = await userDAL.findAllUsers();
		return res.status(200).json(data);
	} catch (err) {
		return res.status(400).json(err);
	}
}

const get_users_by_id = async (req, res) => {
	const id = req.params.id;

	try {
		const data = await userDAL.findUserById(id);
		return res.status(200).json(data);
	} catch (err) {
		return res.status(400).json(`No User Found ${err}`);
	}
}

const add_users = async (req, res) => {
	const newUser = {
		['username']: req.body.username
	};
	
	try {
		await userDAL.insertUser(newUser);
		return res.status(200).json('Successfully Added');
	} catch (err) {
		return res.status(400).json(`Error ${err}`);
	}
}

const update_users = async (req, res) => {
	const id = req.params.id;
	const user = {
		['username']: req.body.username
	};

	try {
		await userDAL.updateUser(id, user);
		return res.status(200).json('Successfully Updated');
	} catch (err) {
		return res.status(400).json(`Update Failed ${err}`);
	}
}

const delete_users = async (req, res) => {
	const id = req.params.id;

	try {
		const data = await userDAL.deleteUser(id);
		return res.status(200).json(`Successfully Deleted ${data.username}`);
	} catch (err) {
		return res.status(400).json(`Delete Failed ${err}`);
	}
}

module.exports = {
	get_all_users,
	get_users_by_id,
	add_users,
	update_users,
	delete_users
}
