var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require("path");

var ctrlBasket = require('../controller/basketController');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  
  var upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'image2', maxCount: 1 }, { name: 'images', maxCount: 8 }])



router.get('/', ctrlBasket.BasketGet)
router.post('/', upload.single("image2"), ctrlBasket.BasketPost)
router.get('/bannerDelete/:_id', ctrlBasket.bannerDelete)



module.exports = router;