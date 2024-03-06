const express=require('express');
const router = require('./routes/jobPosting.js');
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");

dotenv.config();
mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.log("Error while connecting: ",err);
})
app.use(express.json()); // parse requests of content
app.use('/',router);
app.listen(5000,()=> console.log("Server is up and running at port 5000"));