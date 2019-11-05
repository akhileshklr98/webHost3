const express = require('express');
const booksRouter = express.Router();
const BookData = require('../model/bookData');

    booksRouter.route('/').get((req,res)=>{
        BookData.find()
            .then(function(books){
                res.render('books',{title:"Library",books});
            });
    });

    booksRouter.route('/add').get((req,res)=>{
        var book = '';
        res.render(
            'addbook',
            {
                title:"Library",
                heading:"Add Book",
                btnName:"Save",
                book
            }
            );
    });

    booksRouter.route('/edit/:id').get((req,res)=>{
        const id = req.params.id; 
        BookData.findOne({_id:id})
            .then(function(book){
                res.render('addbook',
                {
                    title:"Library",
                    heading:"Edit Book",
                    btnName:"Update",
                    book
                });
            });
    });
    
    booksRouter.route('/save/:id').get((req,res)=>{
        const id = req.params.id;
        var item = {
            title : req.query.title,
            author : req.query.author,
            genre : req.query.genre
        }
        console.log(item)
        BookData.updateOne({_id:id},item, ()=>{
            console.log('update')
            res.redirect('/books');
        });
    });

    booksRouter.route('/save').get((req,res)=>{
        var item = {
            title : req.param("title"),
            author : req.param("author"),
            genre : req.param("genre")
        }
        var book = new BookData(item);
        book.save( ()=>{
            console.log('add')
            res.redirect('/books');
        }); 
    });

    booksRouter.route('/:id').get((req,res)=>{
        const id = req.params.id;    
        BookData.findOne({_id:id})
            .then(function(book){
                res.render('book',{title:"Library",book});
            });
    });
    booksRouter.route('/delete/:id').get((req,res)=>{
        const id = req.params.id; 
        BookData.remove({_id:id})
            .then(function(book){
                res.redirect('/books');
            });
    });

module.exports = booksRouter;



