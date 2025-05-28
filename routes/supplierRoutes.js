const express = require('express');
const router = express.Router();
const controller = require('../controllers/supplierController');

router.post('/', controller.createSupplier);
router.get('/', controller.getAllSuppliers);

module.exports = router;

