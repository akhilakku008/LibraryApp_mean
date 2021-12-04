const express = require('express');
const Authordata = require('../models/authordata')

let app = express.Router();

app.get('/api/author',function(req,res){
    
    Authordata.find()
                .then(function(author){
                    res.send(author);
                    // console.log(author)
                });
});


//view singleauthor
app.get('/api/singleauthor/:id', function (req, res) {

  let id = req.params.id;
  
    Authordata.findOne({ "_id": id })
      .then((singleauthor)=> {
        res.send(singleauthor)
        
    })
})

//update author data view
app.get('/api/updateauthordata/:id', function (req,res){
    const id = req.params.id
    Authordata.findOne({ "_id": id })
      .then((authordata)=> {
      res.send(authordata)
    })
  })
//update author
app.put('/api/updateauthor',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    name1= req.body.name,   //in get method we use query instead of body
      genre= req.body.genre,
      book= req.body.book,
      description= req.body.description,
      image= req.body.image   
   Authordata.findByIdAndUpdate({"_id":id},
                                {$set:{"name":name1,
                                "genre":genre,
                                "book":book,
                                "description":description,
                                "image":image}})
   .then(function(){
       res.send();
   })
 })
 
 //delete author
app.delete('/api/removeauthor/:id',(req,res)=>{
 
   id = req.params.id;
   Authordata.findByIdAndDelete({"_id":id})
   .then(()=>{
       console.log('success')
       res.send();
   })
 })


module.exports = app;