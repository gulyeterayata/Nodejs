var Banner = require('../models/basket');



module.exports.BasketGet = function(req, res){
     Banner.find(function(err, results){
        
        res.render('basket', {banner : results});
        
    });
}


module.exports.BasketPost = function(req,res){
    var yenibanner = new Banner({
       
       bannercontent: req.body.bannercontent,
       bannerfile: req.file.path

   });

   yenibanner.save(function(err){
       if(err){

       }else{
           res.redirect('/basket')
       }
   });
};

module.exports.bannerDelete = function(req, res){
    Banner.findOneAndRemove({_id : req.params._id}, function(err){
        if(err){
            console.log('Banner Silme Hatası!')
        }
        res.redirect('/basket')
    })

}