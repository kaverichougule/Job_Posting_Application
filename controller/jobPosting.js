const jobPosting=require("../module/jobPosting.js")

async function PostAPI(req,res){
    console.log(req.body);
    try{
        const job=await new jobPosting(req.body).save();
        res.json({
            success:true,
            message: "Job posted successfully with id: "+job._id
        })
    }
    catch(err){
        console.log("Error: ",err);
        res.json({
            success:false,
            message:"Error Occured" + err
        })
    }
}

async function getAPI(req,res){
    const allJobs=await jobPosting.find({});
    res.json({
        success: true,
        message:"Found all jobs successfully",
        data:allJobs
    })
}

async function deleteAPI(req,res){
    const {id}=req.params;
    try{
        const findJob=await jobPosting.findByIdAndDelete(id);
        res.json({
            success:true,
            message:`Deleted the Job with ID ${id}`
        })
    }
    catch(err){
        console.log("Err: ",err);
        res.json({
            success:false,
            message:'Failed to delete',
            error:"Error: "+err
        })
    }
}

async function updateAPI(req,res){
    const {id}=req.params;
    try{
        const findJob=await jobPosting.findByIdAndUpdate(id,req.body);
        const updatedData=await jobPosting.findById(id)
        res.json({
            success:true,
            message:`Job successfully updated with id- ${id}`,
            updatedData:updatedData
        })
    }
    catch(err){
        console.log("Error: ",err);
        res.json({
            success:false,
            message:'Failed to update',
            error:"Error: "+err
        })
    }
}

module.exports={
    PostAPI,
    getAPI,
    deleteAPI,
    updateAPI
}
