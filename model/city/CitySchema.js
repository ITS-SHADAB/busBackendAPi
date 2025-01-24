const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
  CityId: { type: Number, required: true },
  City: { type: String, required: true },
  State: { type: String, required: true },
});

const City = mongoose.model('City', CitySchema);
module.exports = City;
