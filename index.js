const connectToMongoDb = require('./db')

const express = require("express")
var cors = require('cors')


connectToMongoDb();

const app = express( );
app.use(cors())

//below line is for start using req.body 
app.use(express.json());

//below line is new for me
app.use('/api/auth' , require('./routes/auth'))
app.use('/api/jobs' , require('./routes/jobs'))



var port = process.env.PORT;


app.listen(port,function(){
console.log(`server is running on port ${port} `)});