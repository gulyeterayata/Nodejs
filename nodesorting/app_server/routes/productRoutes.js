var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require("path");



var ctrlProduct = require('../controller/productController');



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/images/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) //Appending extension
    }
  })
  
  var upload = multer({ storage: storage });
var cpUpload = upload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 8 }])




router.get('/', ctrlProduct.indexGet)
router.post('/', upload.array('images',10) , ctrlProduct.indexPost)
router.post('/productGet/update/:_id', ctrlProduct.productUpdate)


// router.post('/imageUpload', upload.single("image"), ctrlProduct.imageUpload)


router.get('/productList', ctrlProduct.productList)
router.get('/productDelete/:_id', ctrlProduct.productDelete)
router.get('/productGet/:_id', ctrlProduct.productGet)


// router.post('/productUpdate/:_id', upload.single("image"), ctrlProduct.productUpdate)

// router.post('/', cpUpload, ctrlProduct.indexPost function (req, res) {
//
//
//   console.log('Image: 'req.files['image'].oriiginalname + 'is uploaded successfully');
//
//   req.files['images'].forEach(function(file, index, arr) {
//  console.log(index + ' Image: 'file.oriiginalname + 'is uploaded successfully');
// })
//
// });)

// router.post('/', upload.array('images',10), ctrlProduct.indexPost function (req, res) {
//     req.files.forEach(function(file, index, arr) {
//    console.log('Image: 'req.file.oriiginalname + 'is uploaded successfully');
// })
// });)



module.exports = router;
