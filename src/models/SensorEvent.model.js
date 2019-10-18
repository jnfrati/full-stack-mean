

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorEvent = new Schema({
    sensorId: {type: Schema.types.ObjectId, ref: 'Sensor'},
    createAt: Date,
    value: Number
});

module.exports = mongoose.model('SensorEvent', SensorEvent)