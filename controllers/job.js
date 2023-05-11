const jobModel = require('../models/job')
const employeeModel = require('../models/employees');

const getJobs = function(req, res, next){
    console.log("hi")
    jobModel.find({})
    .then((data)=>{
        res.send(data)
    })
    .catch(err=>res.send(err))
    
}
const getJob = function(req, res, next) {
    const id = req.params.id
    console.log(id)
    jobModel.findOne({_id:id})
    .then((data)=>{
        res.send(data)
    })
    

   
}
const createJob = async function(req, res, next) {
   const employee = req.user.id
   try{
     const employeeDetails = await employeeModel.findOne({_id: employee})
      const job = await jobModel.create({
        companyName:req.body.companyName,
        rolename: req.body.rolename,
        experience: req.body.experience,
        skills: req.body.skills,
        location: req.body.location,
        jobmode: req.body.jobmode,   
        eligibility: req.body.eligibility,
        postedBy: employeeDetails.name,
        })
        res.send(job)
        
   }  
   catch(err) {
    res.send(err)
   }

}




const deleteJob =async function(req, res, next) {
    const id = req.params.id;
    console.log(id)
    const delJob =await jobModel.findByIdAndDelete(id)
    res.send(delJob)
    
}
const editJob =async function(req, res, next) {
    const id = req.params.id;
    console.log(id)
    const edJob = await jobModel.findByIdAndUpdate(id, req.body)
    res.send(edJob)
   
    
}



module.exports = {getJobs ,createJob, deleteJob, editJob, getJob};