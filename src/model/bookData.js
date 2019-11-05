const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryDB');

const Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title: String,
    author: String,
    genre: String
});

var bookData = mongoose.model('book-data',bookSchema);

module.exports = bookData;