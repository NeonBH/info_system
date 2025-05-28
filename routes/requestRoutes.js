const express = require('express');
const router = express.Router();
const controller = require('../controllers/requestController');

router.post('/', controller.createRequest);
router.get('/', controller.getAllRequests);
router.patch('/:requestId', controller.updateStatus);

module.exports = router;

