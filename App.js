const express = require('express')
const app = express()
const dataRouter = require('./Routes/Data')
const cors = require('cors')

// app.get('/home', function(req,res){
//     res.send('Home')
// })

app.use(cors())
app.use('/api',dataRouter)

app.listen(process.env.PORT||8080, function(){
    console.log("Working");
})