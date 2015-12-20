var express = require('express');

var bookRouter = express.Router();

var books = [{
    title: 'War and Peace',
    genre: 'Historical Fiction',
    author: 'Leve Tolstoy',
    read: false
}, {
    title: 'War and Peace 2',
    genre: 'Historical Fiction',
    author: 'Leve Tolstoy',
    read: true
}];

bookRouter.route('/')
    .get(function(req, rsp) {
        rsp.render('books', {
            title: 'Hello from render',
            nav: [{
                Link: '/Books',
                Text: 'Books'
            }, {
                Link: '/Authors',
                Text: 'Authors'
            }],
            books: books
        });
    });
bookRouter.route('/single')
    .get(function(req, rsp) {
        rsp.send('Hello Single Books New');
    });

module.exports = bookRouter;

