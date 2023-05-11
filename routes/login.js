var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const employeeModel = require('../models/employees')


/* GET users listing. */
router.post('/', async function(req, res, next) {
  const body = req.body;
 // res.send(body)
 const result = await employeeModel.findOne({email:body.email}, {password:body.password})
 console.log(result)
 if (result===null){
    res.send('Unauthorized access')
 }
 else {
    const token = jwt.sign({id: result._id}, "secret")

    res.send({token: token})
    
 }
 //result.token = token;


});

module.exports = router;