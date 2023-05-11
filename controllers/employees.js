const employeeModel = require('../models/employees')
//const { param } = require('../routes')


const getemployees = function(req, res, next) {
  employeeModel.find({})
  .then(data=>{
    console.log(data)
     res.send(data)
  })
  .catch(err=>{
     res.send(err)
  })


 // res.send('employees page from controller');
}


const postEmployee = async function(req, res, next) {
  let mail = req.body.email;
  
  let result = await employeeModel.findOne({email:mail})
    console.log(result)
    if (result===null) {
    let data = await employeeModel.create(req.body)
    res.send(data)
    }
    else{
      res.send("uSer Already exist")
    }
}


const getemployee = function(req, res, next) {
  const id = req.params.id;
  //res.send(id)
  let getData = {};
    getData = employeeModel.findById(id)
    .then(data=>{
      res.send(data)
    })
    .catch(err=>{
      res.send(err)
    })
    
}


const updateEmployee = async function(req, res, next) {
   const id = req.params.id;
  //let updateData = {};
   //res.send(id)
    const result = await employeeModel.findByIdAndUpdate(id, req.body)
    res.send(result);
    
    
}


const deleteEmployee = async function(req, res, next) {
  const id = req.params.id;
 let updateData = {};
  //res.send(id)
   const result = await employeeModel.findByIdAndDelete(id)
   res.send(result)
  
   
} 


  module.exports = {getemployees, postEmployee, getemployee, updateEmployee, deleteEmployee}