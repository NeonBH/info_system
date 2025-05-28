const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');

router.post('/', controller.createOrder);
router.get('/', controller.getAllOrders);
router.patch('/:orderId', controller.updateOrderStatus);

module.exports = router;

