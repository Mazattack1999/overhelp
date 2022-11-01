const { Schema, model } = require('mongoose');

const meetingSchema = new Schema(
    {
        users: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        applicants: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        openMeeting: {
            type: Boolean,
            default: false
        }
    }
);

const Meeting = model('Meeting', meetingSchema);

module.exports = Meeting;