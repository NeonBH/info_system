const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: String,
  contact: String,
  phone: String
});

module.exports = mongoose.model('Supplier', supplierSchema);

