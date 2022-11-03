const { Schema, model } = require('mongoose');

const helpRequestSchema = new Schema(
    {
        applications: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Application'
            }
        ],
        title: {
            type: String,
            minlength: 1,
            maxlength: 30
        },
        description: {
            type: String,
            maxlength: 500
        },
        category: {
            type: String
        }
    }
);

const HelpRequest = model('Help-Request', helpRequestSchema);

module.exports = HelpRequest;