

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SensorEvent = new Schema({
    sensorId: {type: Schema.Types.ObjectId, ref: 'Sensor'},
    createAt: Date,
    value: Number
});

module.exports = mongoose.model('SensorEvent', SensorEvent)