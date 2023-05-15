const mongoose = require('mongoose');
// Define the schema for the SubDateTourInfo embedded document

const DateRangeSchema = new mongoose.Schema({
  start: Date,
  end: Date
});
// Define the schema for the Post model
const postSchema = new mongoose.Schema({
  partner: { type: String, required: true },
  partner_tour_id: { type: String, required: true },
  title: { type: String, required: true },
  type: String,
  transportation: { type: String, required: true },
  priceFrom: { type: Number, required: true },
  date: [DateRangeSchema],
  countries: [{ type: String, required: true }],
  cities: [{ type: String, required: true }],
  categories: [{ type: String, required: true }],
  descriptions: [{ type: String, required: true }],
  photos: [{ type: String, required: true }],
  other: [mongoose.Schema.Types.Mixed],
});

const subDateTourInfoSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});
// Define the schema for the SubflightInfoTourInfo embedded document
const subflightInfoTourInfoSchema = new mongoose.Schema({
  df_departure_airport: { type: String, required: true },
  df_departure_airport_time: { type: Date, required: true },
  df_arrival_airport: { type: String, required: true },
  df_arrival_airport_time: { type: Date, required: true },
  rf_departure_airport: { type: String, required: true },
  rf_departure_airport_time: { type: Date, required: true },
  rf_arrival_airport: { type: String, required: true },
  rf_arrival_airport_time: { type: Date, required: true },
});

// Define the schema for the TourInfo model
const tourInfoSchema = new mongoose.Schema({
  ref: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  date: { type: subDateTourInfoSchema, required: true },
  flightInfo: subflightInfoTourInfoSchema,
  type: String,
  price: { type: Number, required: true },
  title: { type: String, required: true },
  other: [mongoose.Schema.Types.Mixed],
});

module.exports = mongoose.models.Post || mongoose.model('Post', postSchema)

// Define the Mongoose models
// const Post = mongoose.model('Post', postSchema);
// const TourInfo = mongoose.model('TourInfo', tourInfoSchema);

// module.exports = { Post, TourInfo };