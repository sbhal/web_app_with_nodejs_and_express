var express = require('express');

var bookRouter = express.Router();
var router = function(nav) {

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
            rsp.render('bookListView', {
                title: 'Hello from render',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get(function(req, rsp) {
            var id = req.params.id;
            rsp.render('bookView', {
                title: 'Hello from render',
                nav: nav,
                books: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;