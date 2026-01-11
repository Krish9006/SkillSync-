const Project = require('../models/Project');

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
const getProjects = async (req, res) => {
    try {
        // Fetch projects and populate creator's name/image
        const projects = await Project.find()
            .populate('creator', 'name image role college')
            .sort({ createdAt: -1 }); // Newest first

        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create new project
// @route   POST /api/projects
// @access  Private
const createProject = async (req, res) => {
    try {
        const { title, pitch, description, category, tags } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Please add title and description' });
        }

        const project = await Project.create({
            title,
            pitch,
            description,
            category,
            tags,
            creator: req.user.id // From Auth Middleware
        });

        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProjects, createProject };
