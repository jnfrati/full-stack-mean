

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sensor = new Schema({
  name:  {type: Schema.Types.String, required: true},
  active: {type: Schema.Types.Boolean ,required: true},
  location: {
    lat: {type: Schema.Types.Number, required: true},
    lng: {type: Schema.Types.Number, required: true},    
  },
  minValue: {type: Schema.Types.Number, required: true},
  maxValue: {type: Schema.Types.Number, required: true}
});

module.exports = mongoose.model('Sensor', Sensor)