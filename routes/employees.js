var express = require('express');
var router = express.Router();
var employees = require("../controllers/employees")

/* GET users listing. */
router.get('/', employees.getemployees);
router.get('/:id', employees.getemployee);
router.post('/emp', employees.postEmployee);
router.put('/:id', employees.updateEmployee);
router.delete('/:id', employees.deleteEmployee);

module.exports = router;
