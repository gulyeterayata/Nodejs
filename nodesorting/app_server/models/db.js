var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.set('debug',true);

var mongoDB = 'mongodb://localhost:27017';


mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, err){
    if(err){
        console.log('mongoose hatasi');
        
    }else{
        console.log('mongoose bağlandi' + mongoDB)
    }
});