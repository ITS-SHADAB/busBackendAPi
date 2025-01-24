const mongoose = require('mongoose');

const BusStatusSchema = new mongoose.Schema({
  Availability: { type: Number, required: true },
  RouteBusId: { type: Number, required: true },
  BaseFares: { type: [Number], required: true },
  DiscFares: { type: [Number], required: true },
  TotalTax: { type: Number, required: true },
});

module.exports = BusStatusSchema;
