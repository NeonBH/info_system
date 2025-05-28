const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientController');

router.post('/', controller.createClient);
router.get('/', controller.getAllClients);

module.exports = router;

