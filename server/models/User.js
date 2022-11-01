const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        displayName: {
            type: String,
            required: 'Enter a name for other users to see!',
            minlength: 1,
            maxlength: 20
        },
        username: {
            type: String,
            required: 'You need a username!',
            minlength: 1,
            maxlength: 30
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        meetings: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Meeting'
            }
        ]
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password') || true) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = User;