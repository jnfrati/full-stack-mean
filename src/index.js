const express = require('express')
const sensors = require('./routes/sensors.route')
const app = express()
const port = 3000

const mongoose = require('mongoose');

const uri = "mongodb+srv://test-hhzyb.gcp.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {auth:{
    user:"webee",
    password: "htJYneJrRb0FB1Ms"
},useNewUrlParser: true})
.then(()=>{console.log('connected to db')})
.catch((err)=>{console.log(err)});



app.get('/', (req,res,next)=>{
    res.json("This is an express app")
})


app.use('/sensors', sensors)

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
})