const mongoose = require('mongoose');

const CancellationPolicySchema = new mongoose.Schema({
  Amt: { type: Number, required: true },
  Pct: { type: Number, required: true },
  Mins: { type: Number, required: true },
});

module.exports = CancellationPolicySchema;
