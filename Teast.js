const mongoose = require('mongoose');

// Define PickupInfo Schema
const PickupInfoSchema = new mongoose.Schema({
  PickupTime: { type: Date, required: true },
  Address: { type: String, required: true },
  Phone: { type: String, required: true },
  Landmark: { type: String, required: true },
  PickupName: { type: String, required: true },
});

// Define Passenger Schema
const PassengerSchema = new mongoose.Schema({
  IsAcSeat: { type: Boolean, required: true },
  Age: { type: Number, required: true },
  ServiceTax: { type: Number, default: 0 },
  BaseFare: { type: Number, default: 0 },
  Fare: { type: Number, required: true },
  NationalityId: { type: Number, default: 0 },
  ChildLastName: { type: String, default: '' },
  ChildFirstName: { type: String, default: '' },
  PaxAddress: { type: String, default: '' },
  PaxPNR: { type: String, default: '' },
  PaxCountryCode: { type: String, default: '' },
  PaxNation: { type: String, default: '' },
  PaxIdType: { type: String, default: '' },
  PaxIdNo: { type: String, default: '' },
  PaxEmail: { type: String, default: '' },
  PaxMobile: { type: String, default: '' },
  LastName: { type: String, default: '' },
  SeatType: { type: String, required: true },
  SeatNo: { type: String, required: true },
  Gender: { type: String, required: true },
  Name: { type: String, required: true },
});

// Define ContactInfo Schema
const ContactInfoSchema = new mongoose.Schema({
  CountryCode: { type: String, default: '' },
  Mobile: { type: String, required: true },
  Phone: { type: String, required: true },
  Email: { type: String, required: true },
  CustomerName: { type: String, required: true },
});

// Define Cancellations Schema
const CancellationSchema = new mongoose.Schema({
  Amt: { type: Number, default: 0 },
  Mins: { type: Number, required: true },
  Pct: { type: Number, required: true },
});

// Define Main Booking Schema
const BookingSchema = new mongoose.Schema({
  Success: { type: Boolean, required: true },
  PGCharges: { type: Number, default: 0 },
  IsCovidSafe: { type: Boolean, default: false },
  IsCancelled: { type: Boolean, required: true },
  RefundAmount: { type: Number, default: 0 },
  TotalFare: { type: Number, required: true },
  TotalSeats: { type: Number, required: true },
  RouteBusId: { type: Number, default: 0 },
  ToCityId: { type: Number, default: 0 },
  FromCityId: { type: Number, default: 0 },
  PickupInfo: { type: PickupInfoSchema, required: true },
  Passengers: [PassengerSchema],
  ContactInfo: { type: ContactInfoSchema, required: true },
  Cancellations: [CancellationSchema],
  BookingDate: { type: Date, required: true },
  CancelDate: { type: Date, required: true },
  DepartureDateTime: { type: Date, required: true },
  ArrivalDateTime: { type: Date, required: true },
  JourneyDate: { type: Date, required: true },
  ToCityName: { type: String, required: true },
  FromCityName: { type: String, required: true },
  CompanyName: { type: String, required: true },
  TicketNo: { type: String, required: true },
  PNRNo: { type: String, required: true },
  BusTypeName: { type: String, required: true },
});

// Export the Booking Model
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
