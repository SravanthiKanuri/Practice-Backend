const imageModel = require('../models/image')
const { param } = require('../routes')


const getImages = function(req, res, next) {
    imageModel.find({})
  .then(data=>{
    console.log(data)
    console.log(data.length)
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })


 // res.send('employees page from controller');
}
const getImage = function(req, res, next) {
    const id = req.params.id;
    console.log(id)
    imageModel.findById({_id:id})
  .then(data=>{
    console.log(data)
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })


 // res.send('employees page from controller');
}

const deleteImage = function(req, res, next) {
    const id = req.params.id;
    console.log(id)
    imageModel.findByIdAndRemove({_id:id})
  .then(data=>{
    
    res.send(data)
  })
  .catch(err=>{
    res.send(err)
  })


 // res.send('employees page from controller');
}

const createImages =async function(req, res, next) {
    const body = req.body;
    try {
        let a;
    let newImage =await imageModel.create(body).then((res)=>{a=res._id.toString();console.log(a);})

    res.send(a)
    
     //   res.send(newImage)
    }
    catch(err){
        console.log(err)
    }
    
}


module.exports = {getImages, createImages, getImage, deleteImage}