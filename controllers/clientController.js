const Client = require('../models/Client');

exports.createClient = async (req, res) => {
  const client = await Client.create(req.body);
  res.status(201).json(client);
};

exports.getAllClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

