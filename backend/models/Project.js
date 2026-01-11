const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    // Basics
    title: {
        type: String,
        required: [true, 'Please add a project title'],
        trim: true,
        maxlength: 50
    },
    pitch: {
        type: String, // One line pitch
        required: [true, 'Please add a short pitch'],
        maxlength: 100
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: 1000
    },

    // Categorization
    category: {
        type: String,
        enum: ['Hackathon', 'Startup', 'Project', 'Research', 'Other'],
        default: 'Project'
    },
    tags: {
        type: [String], // e.g. ['AI', 'React', 'Python']
        default: []
    },

    // Team Status
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Completed'],
        default: 'Open'
    },

    // Relationships
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // In future: members array can be added here

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Project', projectSchema);
