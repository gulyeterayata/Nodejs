var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categoryAddSchema = new Schema({
    categoryadd: String
});




var categoryAdd = mongoose.model('categoryAdd', categoryAddSchema);

module.exports = categoryAdd ;