const express = require('express');
const cors = require('cors');
// const jwt = require('jsonwebtoken')
const path = require('path');
var port = process.env.PORT || 3000;

var app = new express();
app.use(cors());

app.use(express.static('./dist/frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  



const book = require('./src/routes/book')
app.get('/api/books', book)

const singlebook = require('./src/routes/book')
app.get('/api/singlebook/:id',singlebook)

const author = require('./src/routes/author')
app.get('/api/author', author)

const singleauthor = require('./src/routes/author')
app.get('/api/singleauthor/:id',singleauthor)

const addbook = require('./src/routes/addform')
app.post('/api/addbook', addbook)

const addauthor = require('./src/routes/addform')
app.post('/api/addauthor', addauthor)

const updatebook = require('./src/routes/book')
app.put('/api/updatebook', updatebook)

const updateauthor = require('./src/routes/author')
app.put('/api/updateauthor', updateauthor)

const removebook = require('./src/routes/book')
app.delete('/api/removebook/:id', removebook)

const removeauthor = require('./src/routes/author')
app.delete('/api/removeauthor/:id',removeauthor)

const updatebookdata = require('./src/routes/book')
app.get('/api/updatebookdata/:id',updatebookdata)

const updateauthordata = require('./src/routes/author')
app.get('/api/updateauthordata/:id',updateauthordata)

const signupdata = require('./src/routes/login')
app.post('/api/signup', signupdata)
 
const Login = require('./src/routes/login')
app.post('/api/login',Login)



app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend//index.html'));
});


app.listen(port,()=>{
    console.log("server ready at:" +port)});
