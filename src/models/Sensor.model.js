

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sensor = new Schema({
  name:  String,
  active: Boolean,
  location: {
    lat: Number,
    lng: Number,    
  },
  minValue: Number,
  maxValue: Number
});

module.exports = mongoose.model('Sensor', Sensor)