const mongoose =require('mongoose') ;
const { Schema } = mongoose;

const imageSchema = new Schema({
    name: String,
    url: String,
    
  });

  const Image = mongoose.model('Image', imageSchema);

  module.exports = Image;