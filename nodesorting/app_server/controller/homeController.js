var Product = require('../models/product');

module.exports.index = function(req, res){
    Product.find(function(err, results){
        res.render('home', {urunler : results});
    });
}

