var express = require('express');
var router = express.Router();
var employeeDetails = require("../controllers/details")

/* GET users listing. */
router.get('/', employeeDetails.getemployees);
// router.get('/:id', employeeDetails.getemployee);
 router.post('/emp', employeeDetails.postEmployee);
// router.put('/:id', employeeDetails.updateEmployee);
router.delete('/:id', employeeDetails.deleteEmployee);

module.exports = router;
