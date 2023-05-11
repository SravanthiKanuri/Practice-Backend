const { MongoClient } = require('mongodb');
var express = require("express")
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const ObjectId=require("mongodb").ObjectId;

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017/db';
const client = new MongoClient(url);

// Database Name
const dbName = 'Employees';

async function main() {
//   Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
 //  const db = client.db(dbName);
//   const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return 'db';
}

main()
  .then(console.log)
  .catch(console.error)
   //.finally(() => client.close());
const port = 3002;


app.get("/users", async function(req, res, next) {
    
    console.log("Hello")
    const result = await client.db("EmployeeDB").collection("Employee").find().toArray()
    try {
        res.send(result)
    }
    catch(err){
        res.send(err)
    }
    
    //console.log(result)
    

})
app.get('/users/:id',async function(req, res, next) {
    console.log(req.params.id);
    const id1=req.params.id
    var oid=new ObjectId(id1)
   const getEmployee = await client.db("EmployeeDB").collection("Employee").findOne({_id:oid})
   res.send(getEmployee)
    // .then(data => res.send(data))
    // .catch(error => res.send(error))
});
app.post("/users", async function(req, res, next){
    const body = req.body;
    //console.log(body)
    const result = await client.db("EmployeeDB").collection("Employee").insertOne(body)
    res.send(result)
})
app.put("/users/:id", async function(req, res, next) {
    // const id1=req.params.id;
     const body = req.body;
     const id1=req.params.id
     var oid=new ObjectId(id1)
     //console.log(body)
     const deleteEmployee = await client.db("EmployeeDB").collection("Employee").updateOne({_id:oid},{$set: body } )
     res.send(deleteEmployee)
 })

app.delete("/users/:id", async function(req, res, next) {
   // const id1=req.params.id;
    const body = req.body;
    const id1=req.params.id
    var oid=new ObjectId(id1)
    //console.log(body)
    const deleteEmployee = await client.db("EmployeeDB").collection("Employee").deleteOne({_id:oid})
    res.send(deleteEmployee)
})

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})