var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.set('debug', true)
mongoose.set('useFindAndModify', false)


var productSchema = new Schema({
    ad : String,
    content : String,
    fiyat : Number,
    category: String,
    file : String,
    cinsiyet: String,
    size: String,
    color : String,
});




var Product = mongoose.model('Product', productSchema);

module.exports = Product;