const mongoose =require('mongoose') ;
const { Schema } = mongoose;

const imageSchema = new Schema({
    companyName: String,
    rolename: String,
    experience: String,
    skills: String,
    location: String,
    jobmode: String,   
    eligibility: String,
    postedBy: String,

  });



  const Job = mongoose.model('Job', imageSchema);

  module.exports = Job;