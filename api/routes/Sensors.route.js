const express = require('express')
const router = express.Router()
const SensorController = require('../controllers/Sensor.controller')
const SensorEventsController = require('../controllers/SensorEvent.controller')
router.get('/', (req,res,next)=>{
    SensorController.getSensors()
    .then((sensors)=>{
        res.status(200).send(sensors)
    })
    .catch((err)=>{
        res.status(500).send('Error inesperado :(')
        throw new err;
    })
})

router.get('/:id',(req,res,next)=>{
    SensorController.getSensor(req.params.id)
    .then((sensor)=>{
        res.status(200).send(sensor)    
    })
    .catch((err)=>{
        res.status(500).send('Error inesperado :(')
        throw new err;
    })
})

router.get('/:id/events', (req,res,next)=>{
    SensorEventsController.getSensorEvents(req.params.id)
    .then((events)=>{
        res.status(200).send(events)    
    })
    .catch((err)=>{
        res.status(500).send('Error inesperado :(')
        throw new err;
    })
})

router.post('/',(req,res,next)=>{
    console.log(req.body)
    const sensor = req.body
    SensorController.saveSensor(sensor)
    .then((sensor)=>{
        res.status(201).send(sensor)    
    })
    .catch((err)=>{
        res.status(500).send('Error inesperado :(')
        throw err;
    })
})

router.put('/:id',(req,res,next)=>{
    const id = req.params.id;
    const sensor = req.body;
    SensorController.updateSensor(id, sensor)


    res.status(200).send('Sensor updated')
})



module.exports = router;