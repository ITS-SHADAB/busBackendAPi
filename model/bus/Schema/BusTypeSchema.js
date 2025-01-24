const mongoose = require('mongoose');

const BusTypeSchema = new mongoose.Schema({
  IsAC: { type: String, required: true },
  Seating: { type: String, required: true },
  Make: { type: String },
  Axle: { type: String },
});

module.exports = BusTypeSchema;
