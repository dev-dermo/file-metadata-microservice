var path = require('path');
var express = require('express');
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.get('/', function(req, res) {
	res.render('index');
});

app.post('/get-file-size', upload.single('file'), function (req, res) {
	var result = { bytes: req.file.size };
	res.json(result);
});

app.listen(app.get('port'), function() {
	console.log('App listening on port ' + app.get('port'));
});