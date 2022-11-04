const {User} = require('../models');

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .sort({_id: -1})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get on user by id
    getUserById({params}, res) {
        User.findById({_id})
            .populate({
                path: 'helpRequests'
            })
            .populate({
                path: 'appliations'
            })
            .then(dbUserData => {
                // If no user is found, send 404
                if (!dbUserData) {
                    res.status(404).json({message: 'No user found with this id!'});
                    return;
                };
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
}

module.exports = userController;