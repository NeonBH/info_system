const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' },
  items: [
    {
      partId: { type: mongoose.Schema.Types.ObjectId, ref: 'Part' },
      quantity: Number
    }
  ],
  status: String,
  relatedRequestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' }
});

module.exports = mongoose.model('Order', orderSchema);
