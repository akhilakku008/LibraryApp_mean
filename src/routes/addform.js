const express = require('express');
const BookData = require('../models/bookdata')
const AuthorData = require('../models/authordata')

let app = express.Router();

app.post('/api/addbook' ,function (req, res) {
    //   console.log(req.body)
    var item = {
        title: req.body.title,   //in get method we use query instead of body
        author: req.body.author,
        genre: req.body.genre,
        description:req.body.description,
        image: req.body.image   
      }
           var book = BookData(item);  
    book.save(); //save to db
    res.send()

})

app.post('/api/addauthor' ,function (req, res) {
    console.log(req.body)
  var item = {
      name: req.body.name,   //in get method we use query instead of body
      genre: req.body.genre,
      book: req.body.book,
      description: req.body.description,
      image: req.body.image   
    }
         var author = AuthorData(item);  
  author.save(); //save to db
  res.send()

})

module.exports = app;