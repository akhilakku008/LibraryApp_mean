//Accessing Mongoose package
const mongoose = require('mongoose')

//Database connection
mongoose.connect('mongodb+srv://iloveme008:iloveme008@cluster0.vqfrw.mongodb.net/LibraryApp?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost:27017/librarynew');
//Schema definition
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
   name : String,
   genre: String,
   book: String,
   description:String,
   image:  String

});

//Model creation
var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
