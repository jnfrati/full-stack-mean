export class SensorEvent {
    constructor(
        public value: Number,
        public createdAt: Date,
        public sensorId: String
    ){}
}
