const { Schema, model } = require('mongoose');

const applicationSchema = new Schema(
    {
        title: {
            type: String,
            minlength: 1,
            maxlength: 30
        },
        description: {
            type: String,
            maxlength: 500
        }
    }
);

const Application = model('Application', applicationSchema);

module.exports = Application;