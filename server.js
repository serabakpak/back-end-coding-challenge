// REQUIREMENTS
var express = require('express');
var app = express();

//MIDDLEWARE
app.use(express.static('public'));


var controllers = require('./controllers');


//ROUTES
app.get('/', function (req, res) {
	res.send('Hello World');
});

app.get('/api/talks', controllers.talks.index);
app.get('/api/attendees', controllers.attendees.index);


//SERVER START
app.listen(3000, function () {
	console.log('HTTP server listening at localhost:3000');
});

