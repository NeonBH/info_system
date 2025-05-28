const mongoose = require('mongoose');

const partSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  criticalThreshold: Number
});

module.exports = mongoose.model('Part', partSchema);

