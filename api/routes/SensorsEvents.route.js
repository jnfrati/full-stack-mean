const express = require('express')
const router = express.Router()
const SensorEventController = require('../controllers/SensorEvent.controller')

router.get('/', async (req,res,next)=>{
    SensorEventController.getEvents()
    .then(events=>{
        res.status(200).send(events)
    })
    .catch(err=>{
        res.status(500).send('Error inesperado :(')
        throw err;
    })

})

router.get('/:id',(req,res,next)=>{

    const id = req.params.id
    SensorEventController.getEvent(id)
    .then(event=>{
        res.status(200).send(event)
    })
    .catch(err=>{
        res.status(500).send('Error inesperado :(')
        throw err;
    })
})

router.post('/', async (req,res,next)=>{
    const event = req.body

    SensorEventController.saveEvent(event)
    .then(event=>{
        SensorEventController.getEventsFromSensor(event.sensorId)
        .then((data)=>{
            req.app.io.in(event.sensorId).emit('events', data)
        })
        res.status(201).send(event)
    })
    .catch(err=>{
        res.status(500).send('Error inesperado :(')
        throw err;
    })

})

router.put('/',(req,res,next)=>{
    const id = req.params.id
    const event = req.body
    SensorEventController.updateEvent(id,event)
    .then(event=>{
        res.status(200).send(event)
    })
    .catch(err=>{
        res.status(500).send('Error inesperado :(')
        throw err;
    })  
})

module.exports = router;