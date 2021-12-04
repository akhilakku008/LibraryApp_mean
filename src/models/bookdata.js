//Accessing Mongoose package
const mongoose = require('mongoose')

//Database connection
mongoose.connect('mongodb+srv://iloveme008:iloveme008@cluster0.vqfrw.mongodb.net/LibraryApp?retryWrites=true&w=majority')
// mongoose.connect('mongodb://localhost:27017/librarynew');
//Schema definition
const Schema = mongoose.Schema;
const BookSchema = new Schema({
   title : String,
   author: String,
   genre: String,
   description:String,
   image:  String

});

//Model creation
var Bookdata = mongoose.model('bookdata',BookSchema);

module.exports = Bookdata;
