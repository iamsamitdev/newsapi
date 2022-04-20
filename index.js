// Import Express
const express = require('express')

// Import Router
const urlRouter = require('./router/url')

// Create Express Object
const app = express()

// เรียกใช้งาน Router
app.use('', urlRouter)

// Run Express Server
app.listen(5000, ()=>{
    console.log('Listening to port 5000');
})

// console.log('Hello Node.JS')
// console.log('สวัสดี')
// console.log(2*3*4*6)