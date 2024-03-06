const express=require('express');
const router = require('./routes/jobPosting.js');
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/JobApp")
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.log("Error while connecting: ",err);
})
app.use(express.json()); // parse requests of content
app.use('/',router);
app.listen(5000,()=> console.log("Server is up and running at port 5000"));