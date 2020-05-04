const exerciseDAL = require('./exerciseDAL');

const get_all_exercises = async (req, res) => {

	try {
		const data = await exerciseDAL.findAllExercises();
		return res.status(200).json(data);
	} catch (err) {
		return res.status(400).json(err);
	}
}

const get_exercise_by_id = async (req, res) => {
	const id = req.params.id;

	try {
		const data = await exerciseDAL.findExerciseById(id);
		return res.status(200).json(data);
	} catch (err) {
		return res.status(400).json(`No Exercise Found ${err}`);
	}
}

const add_exercise = async (req, res) => {
	const newExercise = {
		username: req.body.username,
		description: req.body.description,
		duration: Number(req.body.duration),
		date: Date.parse(req.body.date)
	}

	try {
		await exerciseDAL.insertExercise(newExercise);
		return res.status(200).json('Successfully Added');
	} catch (err) {
		return res.status(400).json(`Error ${err}`);
	}
}

const update_exercise = async (req, res) => {
	const id = req.params.id;
	let exercise = {};
	exercise.username = req.body.username
	exercise.description = req.body.description
	exercise.duration = Number(req.body.duration)
	exercise.date = Date.parse(req.body.date)

	try {
		await exerciseDAL.updateExercise({id, exercise});
		return res.status(200).json('Successfully Updated');
	} catch (err) {
		return res.status(400).json(`Update Failed ${err}`);
	}
}

const delete_exercise = async (req, res) => {
	const id = req.params.id;

	try {
		const data = await exerciseDAL.deleteExercise(id);
		return res.status(200).json(`Successfully Deleted ${data.username}`);
	} catch (err) {
		return res.status(400).json(`Delete Failed ${err}`);
	}
}

module.exports = {
	get_all_exercises,
	get_exercise_by_id,
	add_exercise,
	update_exercise,
	delete_exercise
}
