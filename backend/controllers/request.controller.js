const Request = require('../models/Request');
const User = require('../models/User');

// @desc    Send a connection request
// @route   POST /api/requests
// @access  Private
const sendRequest = async (req, res) => {
    try {
        const { receiverId, type, message, teamId } = req.body;
        const senderId = req.user.id;

        if (senderId === receiverId) {
            return res.status(400).json({ message: "You cannot connect with yourself" });
        }

        // Check if request already exists
        const existingRequest = await Request.findOne({
            sender: senderId,
            receiver: receiverId,
            status: 'pending'
        });

        if (existingRequest) {
            return res.status(400).json({ message: "Request already pending" });
        }

        const request = await Request.create({
            sender: senderId,
            receiver: receiverId,
            type,
            message,
            teamId
        });

        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get requests received by current user
// @route   GET /api/requests/received
// @access  Private
const getReceivedRequests = async (req, res) => {
    try {
        const requests = await Request.find({ receiver: req.user.id })
            .populate('sender', 'name email role image mobile')
            .populate('teamId', 'title')
            .sort({ createdAt: -1 });

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Accept or Reject request
// @route   PUT /api/requests/:id
// @access  Private
const updateRequestStatus = async (req, res) => {
    try {
        const { status } = req.body; // 'accepted' or 'rejected'
        const requestId = req.params.id;

        const request = await Request.findById(requestId);

        if (!request) {
            return res.status(404).json({ message: "Request not found" });
        }

        // Verify receiver is the current user
        if (request.receiver.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized" });
        }

        request.status = status;
        await request.save();

        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get requests sent by current user
// @route   GET /api/requests/sent
// @access  Private
const getSentRequests = async (req, res) => {
    try {
        const requests = await Request.find({ sender: req.user.id })
            .populate('receiver', 'name email role image mobile')
            .populate('teamId', 'title')
            .sort({ createdAt: -1 });

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { sendRequest, getReceivedRequests, updateRequestStatus, getSentRequests };
