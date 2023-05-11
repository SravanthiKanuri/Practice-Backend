var express = require('express');
var router = express.Router();
var images = require("../controllers/image")

/* GET users listing. */
router.get('/', images.getImages);
router.get('/:id', images.getImage);
router.post('/', images.createImages);
router.delete('/:id', images.deleteImage);


module.exports = router;
