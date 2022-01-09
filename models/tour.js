const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  partner: String,
  tourId: String,
  tourTitle: String,
  tourCountries: [String],
  tourCities: [String],
  tourCategory: [String],
  tourHotelName: String,
  hotelStars: String,
  tourLead: String,
  tourDescriptions: [],
  tourSpecialInfos:[],
  tourPhotos: [String],
  priceFrom: Number,
  prices:[],
  startDates: [],
  endDates: [],
  in: [],
  out:[],
  transportation:String,
  tourGroup: [{
    board: { name: String, id: String },
    transportation: { name: String, id: String },
    exclusive: String,
    includes: String,
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tourInfo' }]
  }]

}, { timestamps: true });

// const tourInfoSchema = new mongoose.Schema({
//   ref: mongoose.ObjectId,
//   dateStart: String,
//   dateEnd: String,
//   price: Number,
//   pricePlus:String,
//   type:String,
//   tourTypeName:String,
//   in: [],
//   out: [],
//   roomConfig:{
//     code: String,
//     capacity: String,
//     minAdults: String,
//     maxAdults: String,
//     minChildren: String,
//     maxChildren: String,
//   },

//   flightInfo:{
//     fromDepartureAirport:String,
//     fromDepartureAirportTime:Date,
//     toDepartureAirport:String,
//     toDepartureAirportTime:Date,
    
//     backFromDepartureAirport:String,
//     backFromDepartureAirportTime:Date,
//     backToDepartureAirport:String,
//     backToDepartureAirportTime:Date,
//   }
// }, { timestamps: true });



// const Tours = mongoose.model('tours', tourSchema);
// const TourInfo = mongoose.model('tourInfo', tourInfoSchema);

module.exports = mongoose.models.Tours || mongoose.model('Tours', tourSchema)