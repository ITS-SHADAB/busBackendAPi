const mongoose = require('mongoose');
const BusSchema = require('./Schema/BusSchema');

const DataSchema = new mongoose.Schema({
  ToCityId: { type: Number, required: true }, // ID of the destination city
  FromCityId: { type: Number, required: true }, // ID of the source city
  Buses: [BusSchema], // Array of bus details using the embedded BusSchema
  AllAmenities: { type: [String], required: true }, // List of all possible amenities
  SocialDistancingLabels: { type: [String], required: true }, // Labels for social distancing guidelines
  TotalAvailSeats: { type: Number, required: true }, // Total number of available seats
  JourneyDate: { type: Date, required: true }, // Date of the journey
  ToCityName: { type: String, required: true }, // Name of the destination city
  FromCityName: { type: String, required: true }, // Name of the source city
});

// Create a model from the schema
const BusData = mongoose.model('BusData', DataSchema);

module.exports = BusData;
