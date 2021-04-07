var categoryAdd = require("../models/categoryadd");

module.exports.catAddGet = function(req, res){
        res.render('categoryadd');
}

module.exports.catAddPost = function(req, res){
    var yenicategory = new categoryAdd({
        categoryadd: req.body.categoryadd
    });

    yenicategory.save(function(err){
        if(err){
            console.log(err)
        }else{
            res.redirect('/categoryadd')
        }
    });
}
