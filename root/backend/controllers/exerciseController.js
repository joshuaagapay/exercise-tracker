const Exercise = require('../models/exercise.model');

const get_all_exercises = async (req, res) => {
  try{
    const data = await Exercise.find({});
    return res.status(200).json(data);
  }catch(err){
    return res.status(400).json(`No Exercises Yet ${err}`);
  }
}

const get_exercise_by_id = async (req, res) => {
  const id = req.params.id;

  try{
    const data = await Exercise.findById(id);
    return res.status(200).json(data);
  }catch(err){
    return res.status(400).json(`No Exercise Found ${err}`);
  }
}

const add_exercise = async (req, res) => {
  const newExercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date)
  })

  try{
    const data = await newExercise.save();
    return res.status(200).json('Successfully Added');
  }catch(err){
    return res.status(400).json(`Error ${err}`);
  }
}

const update_exercise = async (req, res) => {
  const id = req.params.id;
  let exercise;
  try{
    exercise = await Exercise.findById(id);
  }catch(err){
    return res.status(400).json(`Error ${err}`);
  }

  if(exercise){
    exercise.username = req.body.username
    exercise.description = req.body.description
    exercise.duration = Number(req.body.duration)
    exercise.date = Date.parse(req.body.date)

    try{
      await exercise.save();
      return res.status(200).json('Successfully Updated');
    }catch(err){
      return res.status(400).json(`Update Failed ${err}`);
    }

  }
}

const delete_exercise = async (req, res) => {
  const id = req.params.id;

  try{
    const data = await Exercise.findByIdAndDelete(id);
    return res.status(200).json(`Successfully Deleted ${data.username}`);
  }catch(err){
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

// exports.insert = async function(req, res){
//   let muncity = new Municipality();
//   muncity.setName(req.body.name);
// try{
//   await muncityAPI.insert_municipality(muncity);
//   // or assign variable if naay parameter ang resolve
//   return res.status(200).send("blah blah")
// } catch(err) {
//   // Ari musulod if reject
//   return res.status(400).send(err.message)
// }
// };