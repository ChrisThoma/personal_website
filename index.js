var path = require('path');
var express = require('express');
var app = express();

//log requests
app.use(express.logger('dev'));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//route for everything else
app.get('*', function(req, res){
	res.send('<img src = "https://scontent-b-lga.xx.fbcdn.net/hphotos-ash4/319534_2085753874721_2145877264_n.jpg">');
});

//fire
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
	console.log("Listening on " + port);
});