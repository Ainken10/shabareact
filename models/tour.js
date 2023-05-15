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


module.exports = mongoose.models.Tours || mongoose.model('Tours', tourSchema)