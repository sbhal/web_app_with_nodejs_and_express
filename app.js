var express = require('express');

//get object for express lib
var app = express();

var port = 5000;

//use 'public' directory as default for lookup for css/js files
app.use(express.static('public'));
//index.html in src/views can now be accessed directly
app.use(express.static('src/views'));

app.get('/', function(req, rsp){
	rsp.send('Hello World from app.get');
});

app.get('/books', function(req, rsp){
	rsp.send('Hello Books from app.get');
});

//listen on port with callback function
app.listen(port, function(err){
	console.log('running server on port ' + port);
});

var hi = 'hello world';

if(true){
	console.log('hi');
}

console.log(hi);