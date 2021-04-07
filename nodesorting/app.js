var fs = require("fs"); // dosya okumamıza olanak sağlıyor.
var express = require("express");
var path = require("path");
var app = express();
var ejsLayouts = require("express-ejs-layouts");
var bodyParser = require('body-parser');
var db = require('./app_server/models/db.js');
const multer = require('multer');






app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/app_server/views')); //EJS dosyalarımızın bulunmasını sağlıyor.
// var controller = require('./app_server/routes/productRoute')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/uploads/images/", express.static(path.join(__dirname, 'uploads/images/')));
app.use(ejsLayouts);
 // Bu kod satırı sayesinde public klasörümüz kullanıcı tarafında görünüyor.
//Bu sayede de css dosyamız okunuyor.
// sendFile index.html sayfasının kullanıcı tarafında görünmesini saglıyor
// path.join(__dirname, "a.html")ise a .html'in bilgisayardaki yolunu doğru bulmayı sağlıyor.





require('./app_server/routes/routeManager')(app);

// var Product = require('./app_server/models/product');


app.listen(8000);
