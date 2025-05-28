const Request = require('../models/Request');

exports.createRequest = async (req, res) => {
  const reqData = await Request.create(req.body);
  res.status(201).json(reqData);
};

exports.getAllRequests = async (req, res) => {
  const data = await Request.find().populate('clientId');
  res.json(data);
};

exports.updateStatus = async (req, res) => {
  const updated = await Request.findByIdAndUpdate(req.params.requestId, req.body, { new: true });
  res.json(updated);
};

