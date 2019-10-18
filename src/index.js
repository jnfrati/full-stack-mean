const express = require('express')

const app = express()
const port = 3000


app.get('/', (req,res,next)=>{
    res.json("This is an express app")
})

app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
})