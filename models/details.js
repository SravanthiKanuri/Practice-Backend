const mongoose =require('mongoose') ;
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    employeeId: String,
    createdAt:  String,
    updatedAt:  String,
    mailId: String,
    alternateNo: Number
  });

  const Employee = mongoose.model('Employee', employeeSchema);

  module.exports = Employee;


