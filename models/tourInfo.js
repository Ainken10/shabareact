const mongoose = require('mongoose');

const tourInfosSchema = new mongoose.Schema({
  ref: mongoose.ObjectId,
  dateStart: String,
  dateEnd: String,
  price: Number,
  pricePlus:String,
  type:String,
  tourTypeName:String,
  in: [],
  out: [],
  roomConfig:{
    code: String,
    capacity: String,
    minAdults: String,
    maxAdults: String,
    minChildren: String,
    maxChildren: String,
  },

  flightInfo:{
    fromDepartureAirport:String,
    fromDepartureAirportTime:Date,
    toDepartureAirport:String,
    toDepartureAirportTime:Date,
    
    backFromDepartureAirport:String,
    backFromDepartureAirportTime:Date,
    backToDepartureAirport:String,
    backToDepartureAirportTime:Date,
  }
}, { timestamps: true });

module.exports = mongoose.models.tourInfos || mongoose.model('tourInfos', tourInfosSchema)