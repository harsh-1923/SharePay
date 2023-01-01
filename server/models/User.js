const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true
    },
    contactNo: {
        type: 'string',
        required: true
    },
    upiID: {
        type: 'string',
        required: false,
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    premium: {
        type: Boolean,
        required: true,
        default: false
    },
    avatar: {
        type: 'string',
        required: true
    },
    groupIDs: {
        type: [String],
        default: [],
        required: true
    },
    amountDue: {
        type: Number,
        required: true,
        default: 0
    },
    people: {
        type: [String],
        required: true,
        default: [],
    },
    notifications: {
        type: [String],
        required: true,
        default: []
    }
});

module.exports = mongoose.model("User", UserSchema);