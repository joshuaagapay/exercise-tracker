const User = require('./user');

const findAllUsers = () => {
    return new Promise((resolve, reject) => {
        User.find({}).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        User.findById(id).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const insertUser = (user) => {
    return new Promise((resolve, reject) => {
        const newUser = new User({
            ...user
        });
        newUser.save().then(data => {
            return resolve(data);
        });
    }).catch(err => {
        return reject(new Error(err));
    })
}

const updateUser = (id, user) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(id, { $set: { ...user } }).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(new Error(err));
        })
    })
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        User.findByIdAndDelete(id).then(data => {
            return resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}

module.exports = {
    findAllUsers,
    findUserById,
    insertUser,
    updateUser,
    deleteUser
}