const mongoose = require('mongoose');
const PickupSchema = require('./PickupSchema');
const DropoffSchema = require('./DropoffSchema');
const BusStatusSchema = require('./BusStatusSchema');
const CancellationPolicySchema = require('./CancellationPolicySchema');
const BusTypeSchema = require('./BusTypeSchema');

const BusSchema = new mongoose.Schema({
  IsCovidSafe: { type: Boolean, required: true },
  HasPGCharges: { type: Boolean, required: true },
  IsGPS: { type: Boolean, required: true },
  IsPremium: { type: Boolean, required: true },
  IsFlexi: { type: Boolean, required: true },
  NonRefundable: { type: Boolean, required: true },
  MTicket: { type: Boolean, required: true },
  v: { type: Number, required: true },
  CompanyId: { type: Number, required: true },
  ProvCompId: { type: Number },
  ProvId: { type: Number, required: true },
  RouteBusId: { type: Number, required: true },
  BusType: BusTypeSchema,
  Pickups: [PickupSchema],
  Dropoffs: [DropoffSchema],
  Canc: [CancellationPolicySchema],
  Amenities: { type: [Number], required: true },
  BusStatus: BusStatusSchema,
  DisplayBusType: { type: String, required: true },
  Visibility: { type: Boolean, required: true },
  CommPct: { type: Number, required: true },
  HasDiscount: { type: Boolean, required: true },
  DiscountPct: { type: Number },
  DiscountAmt: { type: Number },
  CompanyNameWithoutSuffix: { type: String, required: true },
  ToName: { type: String, required: true },
  FromName: { type: String, required: true },
  ChartCode: { type: String, required: true },
  Duration: { type: String, required: true },
  BusLabel: { type: String, required: true },
  CompanyName: { type: String, required: true },
  ArrTime: { type: Date, required: true },
  DeptTime: { type: Date, required: true },
  TripId: { type: String, required: true },
});

module.exports = BusSchema;
