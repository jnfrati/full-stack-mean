const SensorEventModel = require('../models/SensorEvent.model')
const SensorController = require('./Sensor.controller')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = {
    getEvents(){
        return new Promise((resolve, reject)=>{
            SensorEventModel.find()
            .then(data => {
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    getSensorEvents(id){
        return new Promise((resolve, reject)=>{
            SensorEventModel.find({sensorId: ObjectId(id)})
            .then((data)=>{
                resolve(data)
            })
            .catch((error)=>{
                reject(error)
            })
        })
    },
    getEvent(id){
        return new Promise((resolve, reject)=>{
            SensorEventModel.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    async saveEvent(event){
        try{
            const sensor = await SensorController.getSensor(event.sensorId)
            console.log(sensor)
            if(event.value <= sensor.maxValue && event.value >= sensor.minValue)
                throw new Error('Value out of parameters')
    
            let newEvent = new SensorEventModel({
                sensorId: event.sensorId,
                value: event.value
            })
            return await newEvent.save()
        }catch(err){
            throw err
        }
    },
    updateEvent(id,event){
        return new Promise((resolve, reject)=>{
            SensorEventModel.findByIdAndUpdate(id, {$set:{...event}},{new: true})
            .then(data=>{
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
    async getEventsFromSensor(sensorId){
        try{
            return await SensorEventModel.find({sensorId})
        }catch(err){
            throw err
        }
    }
}   