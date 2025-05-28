const express = require('express');
const router = express.Router();
const controller = require('../controllers/partController');

router.get('/', controller.getAllParts);
router.post('/', controller.createPart);
router.patch('/:partId', controller.updatePart);

module.exports = router;

