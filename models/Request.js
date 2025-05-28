const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  workerId: String,
  description: String,
  status: String,
  source: String
});

module.exports = mongoose.model('Request', requestSchema);

