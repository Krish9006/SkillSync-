const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type: {
        type: String,
        enum: ['connect', 'join_team'],
        default: 'connect'
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    message: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Request', requestSchema);
