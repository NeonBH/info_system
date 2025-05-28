const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  recipientType: String,
  message: String,
  channel: String,
  sentAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);

