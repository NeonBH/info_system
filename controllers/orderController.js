const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('supplierId items.partId relatedRequestId');
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const updated = await Order.findByIdAndUpdate(req.params.orderId, req.body, { new: true });
  res.json(updated);
};

