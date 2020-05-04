const Exercise = require('./exercise');

const findAllExercises = () => {
    return new Promise((resolve, reject) => {
        Exercise.find({}).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const findExerciseById = (id) => {
    return new Promise((resolve, reject) => {
        Exercise.findById(id).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const insertExercise = (exercise) => {
    return new Promise((resolve, reject) => {
        const newExercise = new Exercise({
            ...exercise
        })
        newExercise.save().then(data => {
            return resolve(data);
        });
    }).catch(err => {
        return reject(new Error(err));
    })
}

const updateExercise = ({ id, exercise }) => {
    return new Promise((resolve, reject) => {
        Exercise.findByIdAndUpdate(id, { $set: { ...exercise } }).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const deleteExercise = (id) => {
    return new Promise((resolve, reject) => {
        Exercise.findByIdAndDelete(id).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}

module.exports = {
    findAllExercises,
    findExerciseById,
    insertExercise,
    updateExercise,
    deleteExercise
}