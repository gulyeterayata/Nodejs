var Product = require('../models/product');
var CategoryProduct = require('../models/categoryadd');




module.exports.indexGet = function(req, res){
    Product.find(function(err, results){
        CategoryProduct.find(function(err,cat){
            res.render('product', {urunler : results, categorylist:cat});
        })

    });

}






module.exports.indexPost = function(req,res){

    var map1 = req.files.map(x => x.path);
    var result = [];
console.log(map1.join())

    if(req.body.imagesSort){

      var orderlist= req.body.imagesSort;
      var order = orderlist.split(",");


      map1 = order.map(x => 'uploads/images/' + x);
      console.log(map1.join())
    //
    // var orderlist = req.body.imagesSort;
    // var order = orderlist.split(",");
    //
    //
    // console.log('unsorded: ' + map1.join());
    //
    // map1 = order.filter(function(v) {
    //     return map1.includes(v);
    // });
    // console.log('sorded: ' + map1.join());
    // console.log(map1);





//     order.forEach(function(key) {
//     var found = false;
//     map1 = map1.filter(function(item) {
//         if(!found && item == key) {
//             result.push(item);
//             found = true;
//             return false;
//         } else
//             return true;
//     });
// });

  //
  //       result = map1.map(function(item) {
  //     var n = order.indexOf(item);
  //     order[n] = '';
  //     return [n, item]
  // }).sort().map(function(j) { return j });

}

    var images = map1.join()

// var images = req.files.join()

     var yeniproduct = new Product({
        ad: req.body.ad,
        content: req.body.content,
        fiyat: req.body.fiyat,
        category : req.body.category,
        cinsiyet : req.body.cinsiyet,
        size: req.body.size,
        color : req.body.color,
        file: images

    });

    yeniproduct.save(function(err){
        if(err){
console.log(err)
        }else{
            res.redirect('/product')
        }
    });
};

// module.exports.imageUpload = function(req,res){
//      res.json(req.file.path);
// }

module.exports.productList = function(req, res){
    Product.find(function(err, results){

        res.render('productList', {urunler : results});
        console.log(results)
    });

}

module.exports.productDelete = function(req, res){
    Product.findOneAndRemove({_id : req.params._id}, function(err){
        if(err){
            console.log('Silme Hatası!')
        }
        res.redirect('/product')
    })

}


module.exports.productGet = function(req, res){
    Product.findOne({_id : req.params._id} , function(err, results){
        CategoryProduct.find(function(err,cat){
            res.render('productGet', {urunler : results, categorylist:cat});
        })

    });
}

module.exports.productUpdate = function(req, res){
    console.log(req.params._id)
    console.log(req.body)

    // Product.findOneAndUpdate({_id : req.params._id},req.params)
    Product.findOneAndUpdate({_id : req.params._id}, req.body,  (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
         res.redirect('/product')
    });

    // res.redirect('/product')
    // Product.findOneAndUpdate({_id : req.params._id} , function(err){
    //  if(err){
    //      console.log(err)

    //  }else{
    //      res.redirect('/product')
    //  }
    // }
//)
}



// module.exports.productUpdate = function(req, res){

//     const doc = Product.findOne({_id : req.params._id});
//     var result = ""

//     if(req.file){
//         var yeniproduct = new Product({
//             ad: req.body.ad,
//             content: req.body.content,
//             fiyat: req.body.fiyat,
//             file: req.file.path

//         });
//     }else{
//     var yeniproduct = new Product({
//         ad: req.body.ad,
//         content: req.body.content,
//         fiyat: req.body.fiyat,
//         file: ""

//     });
// }

// const ss = doc.updateOne(
//     { ad: req.body.ad },
//     { content: req.body.content },
//     { fiyat: req.body.fiyat },
//     { file: 'NEW LABEL' }
//   );
//   console.log(JSON.stringify(ss, null, 4));



// //     doc.overwrite(yeniproduct);
// //    result = doc.save();
// //    console.log(result)


// // Sets `name` and unsets all other properties





//     // yeniproduct.updateOne(function(err){
//     //     if(err){

//     //     }else{
//     //         res.redirect('/product')
//     //     }
//     // });
//     // Product.findOneAndUpdate({_id : req.params._id} , function(err, results){
//     //     if(err){
//     //         console.log('Update Hatası!')
//     //     }
//     //     res.redirect('/product');
//     // });
// }
