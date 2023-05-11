var express = require('express');
var router = express.Router();
const middleware = require('./middleware')

var jobs = require("../controllers/job")


router.get('/', jobs.getJobs);
router.get('/:id', jobs.getJob);
router.post('/new' ,middleware, jobs.createJob)
router.delete('/:id', jobs.deleteJob);
router.put('/:id', jobs.editJob);

module.exports = router;