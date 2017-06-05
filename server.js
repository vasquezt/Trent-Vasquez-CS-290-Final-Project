var path = require('path');
var fs = require('fs');
var http= require('http');
var path = require('path');
var url = require('url');

var express = require('express');
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');

var port = process.env.PORT || 9001;
console.log('Server is running on port: ' + port);

var app = express();
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', '.handlebars');

app.get('/', function(req, res, next){
	res.render('homepage');
});

app.get('*', function(req, res){
	res.status(404);
	res.render('404Page');
});

app.listen(port);
