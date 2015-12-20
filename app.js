var express = require('express');

//get object for express lib
var app = express();

var port = process.env.PORT || 5000;

var bookRouter = require('./src/routes/bookRoutes');

//use 'public' directory as default for lookup for css/js files
app.use(express.static('public'));
//index.html in src/views can now be accessed directly
app.set('views', './src/views');

app.set('view engine', 'ejs');
//var handlebars = require('express-handlebars');
//app.engine('.hbs', handlebars({extname: '.hbs'}));

//app.set('view engine', '.hbs');

app.use('/Books', bookRouter);

app.get('/', function(req, rsp) {
    rsp.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    }); //renders index.ejs file
});

app.get('/books', function(req, rsp) {
    rsp.send('Hello Books from app.get');
});

//listen on port with callback function
app.listen(port, function(err) {
    console.log('running server on port ' + port);
});

var hi = 'hello world';

if (true) {
    console.log('hi');
}

console.log(hi);