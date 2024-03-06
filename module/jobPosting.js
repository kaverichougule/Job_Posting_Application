const mongoose=require("mongoose");

const schema={
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }
}

const jobModel=mongoose.model("jobCollection",schema);
module.exports=jobModel;