const express = require('express');
const BookData = require('../models/bookdata')

let app = express.Router();

//view book
app.get('/api/books',function(req,res){
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                    // console.log(books)
                });
});

//view singlebook
app.get('/api/singlebook/:id', function (req, res) {
  
  let id = req.params.id;
  
    BookData.findOne({ "_id": id })
      .then((singlebook)=> {
        res.send(singlebook)
        
    })
})
//update data view
app.get('/api/updatebookdata/:id', function (req,res){
    const id = req.params.id
    BookData.findOne({ "_id": id })
      .then((bookdata)=> {
      res.send(bookdata)
    })
  })
//update book
  app.put('/api/updatebook',(req,res)=>{
      console.log(req.body)
      id=req.body._id,
       title = req.body.title,   //in get method we use query instead of body
        author = req.body.author,
        genre = req.body.genre,
        description =req.body.description,
        image = req.body.image   
     BookData.findByIdAndUpdate({"_id":id},
                                  {$set:{"title":title,
                                  "author":author,
                                  "genre":genre,
                                  "description":description,
                                  "image":image}})
     .then(function(){
         res.send();
     })
   })
   
   //delete book
app.delete('/api/removebook/:id',(req,res)=>{
   
     id = req.params.id;
     BookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('success')
         res.send();
     })
   })



module.exports = app;