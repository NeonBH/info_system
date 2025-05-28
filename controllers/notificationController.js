const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
  const note = await Notification.create(req.body);
  res.status(201).json(note);
};

exports.getAllNotifications = async (req, res) => {
  const notes = await Notification.find();
  res.json(notes);
};

