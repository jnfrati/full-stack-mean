const SensorModel = require('../models/Sensor.model')

module.exports = {
    getSensors(){
        return new Promise((resolve, reject)=>{
            SensorModel.find()
            .then(data => {
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    getSensor(id){
        return new Promise((resolve, reject)=>{
            SensorModel.findById(id)
            .then(data => {
                resolve(data)
            })
            .catch(err =>{
                reject(err)
            })
        })
    },
    saveSensor(sensor){
        return new Promise((resolve,reject)=>{
            try{
                const newSensor = new SensorModel({
                    name: sensor.name,
                    active: sensor.active,
                    location: sensor.location,
                    minValue: sensor.minValue,
                    maxValue: sensor.maxValue
                })
                newSensor.save()
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(err)
                })    
            }catch(err){
                reject(err)
            }
        })
    },
    updateSensor(id,sensor){
        return new Promise((resolve, reject)=>{
            SensorModel.findByIdAndUpdate(id, {$set:{...sensor}},{new: true})
            .then(data=>{
                resolve(data)
            })
            .catch(error => {
                reject(error)
            })
        })
    },
}   