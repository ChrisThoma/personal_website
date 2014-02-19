var path = require('path');
var express = require('express');
var app = express();

//log requests
app.use(express.logger('dev'));

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/books/:id', function(req, res){ 
// 	var bookData = {title: "the name of the book", author: "some writer"};
// 	res.render('book.ejs', {book: bookData});
// });

// app.get('/books', function(req, res) {
// 	res.send('A list of books should go here');
// });

// //route for everything else
app.get('*', function(req, res){
	res.send('saurav.ejs');
});

//fire
var port = Number(process.env.PORT || 3000);
app.listen(port, function() {
	console.log("Listening on " + port);
});