var path = require('path');
var fs = require('fs');
var http= require('http');
var path = require('path');
var url = require('url');

var express = require('express');
var handlebars = require('handlebars');
var exphbs = require('express-handlebars');

var secureArticleData = require('./secureArticleData');
var articleData = require('./articleData');

var port = process.env.PORT || 9001;
console.log('Server is running on port: ' + port);

var app = express();
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', '.handlebars');

app.get('/', function(req, res, next){
	if(secureArticleData){
		if(articleData){
			var templateArgs = {
				articleDataNorm: articleData,
				articleDataCur: secureArticleData
			}
		}else{
			var templateArgs = {
				articleDataCur: secureArticleData
			}
		}
		res.render('homepage', templateArgs);
	}else{
		res.render('404Page');
	}	

	
});

app.get('/:index', function(req, res, next){
	var page = req.params.index;
	var pageFound = 0;

	if(page == 'newArticle'){
		var templateArgs = {
		}
		res.render('newArticle', templateArgs);
		pageFound = 1;
	}

	if(secureArticleData){
		var numArticles = secureArticleData.length;
		for(i = 0; i < numArticles; i++){
			if(secureArticleData[i].title == page){
				subArray = [];
				subArray[0] = secureArticleData[i]
				templateArgs = {
					articleDataCur: subArray
				}
				pageFound = 1;
				res.render('homepage', templateArgs);
				break;
			}
		}
	}
	if(pageFound == 0){
		if(articleData){
			var numArticles = articleData.length;
			for(i = 0; i < numArticles; i++){
				if(articleData[i].title == page){
					subArray = [];
					subArray[0] = articleData[i]
					templateArgs = {
						articleDataCur: subArray
					}
					pageFound = 1;
					res.render('homepage', templateArgs);
					break;
				}
			}
		}
	}
	if(pageFound == 0){
		res.render('404Page');
	}
});

app.get('*', function(req, res){
	res.status(404);
	res.render('404Page');
});

app.listen(port);
