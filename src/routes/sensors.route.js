const express = require('express')
const router = express.Router()
const Sensor = require('../models/Sensor.model')

router.get('/', async (req,res,next)=>{
    const sensors = await Sensor.find()
    res.status(200).send(sensors)
})

router.get('/:id',(req,res,next)=>{

    const id = req.params.id
    res.status(200).send(`Sensor with id of -> ${id}`)
})

router.post('/',(req,res,next)=>{
    res.status(201).send('Sensor created')
})

router.put('/',()=>{
    res.status(200).send('Sensor updated')
})

module.exports = router;