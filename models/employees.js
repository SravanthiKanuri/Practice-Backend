const mongoose =require('mongoose') ;
const { Schema } = mongoose;

const employeeSchema = new Schema({
    name: String,
    email: String,
    password: String
  });

  const Detail = mongoose.model('Detail', employeeSchema);

  module.exports = Detail;