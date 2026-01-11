const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth.middleware');
const { sendRequest, getReceivedRequests, updateRequestStatus, getSentRequests } = require('../controllers/request.controller');

router.post('/', protect, sendRequest);
router.get('/received', protect, getReceivedRequests);
router.get('/sent', protect, getSentRequests);
router.put('/:id', protect, updateRequestStatus);

module.exports = router;
