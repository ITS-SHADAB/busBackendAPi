const mongoose = require('mongoose');

const PickupSchema = new mongoose.Schema({
  PickupTime: { type: Date, required: true },
  PickupArea: { type: String },
  PickupName: { type: String, required: true },
  PickupCode: { type: String, required: true },
  PickupCrossed: { type: Boolean, default: false },
});

module.exports = PickupSchema;
