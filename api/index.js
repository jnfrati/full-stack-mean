const express = require('express')
const http = require('http')
const app = express()
const socketIO = require('socket.io')


const sensors = require('./routes/Sensors.route')
const sensorsEvents = require('./routes/SensorsEvents.route')
const SensorEventController = require('./controllers/SensorEvent.controller')

app.use(require('body-parser').json());
app.use(require('cors')())

app.get('/', (req,res,next)=>{
    res.json("This is an express app")
})

app.use('/sensors', sensors)

app.use('/events',sensorsEvents)

const server = http.createServer(app)
const io = socketIO(server)
app.io = io;
io.on('connection', function(socket){
    console.log('User connected!')
    const sensorId = socket.request._query['sensor']
    socket.join(sensorId);
    SensorEventController.getEventsFromSensor(sensorId)
    .then(data=>{
        socket.in(sensorId).emit('events', data)
    })
    socket.on('disconnect', function(){
        console.log('User Disconnected');
    });
});

const mongoose = require('mongoose')

const uri = "mongodb+srv://test-hhzyb.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(uri, {auth:{
    user:"webee",
    password: "htJYneJrRb0FB1Ms"
}})
.then(()=>{
    server.listen(process.env.LISTEN_PORT || 3000, ()=>{
        console.log(`App listening on port: ${process.env.LISTEN_PORT || 3000}`)
    })
})
.catch((err)=>{console.log(err)});

