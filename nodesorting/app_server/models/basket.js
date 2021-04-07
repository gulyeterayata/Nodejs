var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bannerSchema = new Schema({
    bannercontent : String,
    bannerfile : String
});




var Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;