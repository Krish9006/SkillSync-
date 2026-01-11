const User = require('../models/User');

// @desc    Get current user profile
// @route   GET /api/users/me
// @access  Private
const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Update user profile (Skills, Bio, etc.)
// @route   PUT /api/users/profile
// @access  Private
const updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if they exist in request body
        user.role = req.body.role || user.role;
        user.college = req.body.college || user.college;
        user.year = req.body.year || user.year;
        user.bio = req.body.bio || user.bio;
        user.skills = req.body.skills || user.skills;
        user.github = req.body.github || user.github;
        user.linkedin = req.body.linkedin || user.linkedin;
        user.mobile = req.body.mobile || user.mobile;
        user.image = req.body.image || user.image;

        const updatedUser = await user.save();

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all users (for talent finder)
// @route   GET /api/users
// @access  Private
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getMe, updateProfile, getAllUsers };
