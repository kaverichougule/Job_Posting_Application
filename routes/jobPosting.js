// POST /api/v1/job => Create Job
// GET /api/v1/job => Get job
const express=require("express");
const router=express.Router();
const {PostAPI,getAPI,deleteAPI,updateAPI} = require("../controller/jobPosting.js");
router.post("/api/job",PostAPI);
router.get("/api/job",getAPI);
router.delete("/api/job/:id",deleteAPI)
router.patch("/api/job/:id",updateAPI);

module.exports=router;