const HelpRequest = require('../models/HelpRequest');

const helpRequestController = {
    // get all help requests
    getAllHelpRequests(req, res) {
        HelpRequest.find({})
            .sort({ _id: -1 })
            .then(dbHelpRequestData => res.json(dbHelpRequestData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // get one help request by id
    getHelpRequestById({params}, res) {
        HelpRequest.findById(params.id)
            .populate({
                path: 'applications'
            })
            .then(dbHelpRequestData => {
                if (!dbHelpRequestData) {
                    res.status(404).json({message: 'No help requests found with that id'});
                    return;
                }
                res.json(dbHelpRequestData);
            })
            .catch(err => {
                res.status(400).json(err);
            })
    }
}

module.exports = helpRequestController;