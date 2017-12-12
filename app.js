var path = require('path');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
	res.render('index');
});

app.listen(app.get('port'), function() {
	console.log('App listening on port ' + app.get('port'));
});