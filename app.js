const express = require('express');
const chalk = require('chalk');
const path = require('path');

var app = new express();

const booksRouter = require('./src/routes/bookRoutes');  
app.use('/books',booksRouter);

app.use(express.static(path.join(__dirname,"/public/")));
app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render(
        'index',
        {
            title:"Library"
        }
    );
});

app.listen(3000, function(){
    console.log('listening to port '+chalk.green('3000'));
});

