export class Sensor {
    _id: String;
    
    constructor(
        public name: String,
        public location: {
            lat: Number,
            lng: Number
        },
        public minValue: Number,
        public maxValue: Number,
        public active: Boolean,   
    ){}
}
