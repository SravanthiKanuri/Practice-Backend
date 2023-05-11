var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const employeeModel = require('../models/employees');

//const token = auth.header['authorization'];
const verifytoken = function(req, res, next) {
   const token1 =  req.headers["authorization"]
   const token = (token1.split(" ")[1])
    if (!token) {
        return res.send("token is required")
    }
    const decode = jwt.verify(token, "secret"  ,(err,user) => {
        if(err) {
           res.send(err)
        }  
        //console.log(user)
        req.user = user;
    })
    next()

   

    // try{
    //     const user = jwt.verify(token, "secret")
    //     req.name = (user);
    //     res.send(req.name)
    // }
    // catch(err){
    //     res.send(err)
    // }
    // return next()

}

module.exports = verifytoken;