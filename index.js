var express = require('express');
var path = require('path');
var router = require('./controls/app.js');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));

app.use('/', router);
app.use('/studentInfo', router);

app.listen(8080);
console.log("Server listening port 8080");
