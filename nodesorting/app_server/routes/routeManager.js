var routeProduct = require('./productRoutes');
var routeHome = require('./homeRoutes');
var routeBasket = require('./basketRoutes');
var routeCategoryAdd = require('./categoryaddRoutes');





module.exports = function(app){
    app.use('/product', routeProduct);
    app.use('/', routeHome);
    app.use('/basket', routeBasket);
    app.use('/categoryadd', routeCategoryAdd);
}