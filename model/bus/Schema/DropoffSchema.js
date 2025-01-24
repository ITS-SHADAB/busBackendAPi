const mongoose = require('mongoose');

const DropoffSchema = new mongoose.Schema({
  DropoffTime: { type: Date, required: true },
  DropoffName: { type: String, required: true },
  DropoffCode: { type: String, required: true },
});

module.exports = DropoffSchema;
