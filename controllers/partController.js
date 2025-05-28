const Part = require('../models/Part');

exports.getAllParts = async (req, res) => {
  const parts = await Part.find();
  res.json(parts);
};

exports.createPart = async (req, res) => {
  const part = await Part.create(req.body);
  res.status(201).json(part);
};

exports.updatePart = async (req, res) => {
  const part = await Part.findByIdAndUpdate(req.params.partId, req.body, { new: true });
  res.json(part);
};

