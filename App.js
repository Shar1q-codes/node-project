const express = require('express')
const app = express()
const dataRouter = require('./Routes/Data')

// app.get('/home', function(req,res){
//     res.send('Home')
// })

app.use('/api',dataRouter)

app.listen(8000, function(){
    console.log("Working");
})