var path = require('path');
var express = require('express');
var app = express();

//log requests
app.use(express.logger('dev'));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//route for everything else
app.get('*', function(req, res){
	re.send('sup');
});

//fire
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
	console.log("Listening on " + port);
});