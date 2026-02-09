const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // Auth Fields
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false // Don't return password by default
    },

    // Profile Fields (Project Buddies Specific)
    role: {
        type: String,
        default: 'Student' // e.g., Full Stack Developer, UI/UX Designer
    },
    college: {
        type: String,
        default: ''
    },
    year: {
        type: String, // e.g., '3rd Year'
        default: ''
    },
    bio: {
        type: String,
        maxlength: 500,
        default: ''
    },
    skills: {
        type: [String], // Array of strings e.g. ['React', 'Node.js']
        default: []
    },
    image: {
        type: String, // URL or Emoji
        default: '👨‍💻'
    },

    // Social Links
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    mobile: { type: String, default: '' },

    // Gamification
    badges: {
        type: [String],
        default: ['Newbie']
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
