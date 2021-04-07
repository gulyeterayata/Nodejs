var express = require('express');
var router = express.Router();

var ctrlcategoryAdd = require('../controller/categoryaddController');
router.get('/', ctrlcategoryAdd.catAddGet)
router.post('/', ctrlcategoryAdd.catAddPost)


module.exports = router;