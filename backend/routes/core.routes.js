const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const { getMe, updateProfile, getAllUsers } = require('../controllers/user.controller');
const { getProjects, createProject } = require('../controllers/project.controller');

// User Routes
router.get('/users/me', protect, getMe);
router.put('/users/profile', protect, updateProfile);
router.get('/users', protect, getAllUsers);

// Project Routes
router.get('/projects', getProjects); // Public: Everyone can see projects
router.post('/projects', protect, createProject); // Private: Only logged in users can create

module.exports = router;
