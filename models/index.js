//require mongoose and connect it to the database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikistack');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var Page, User;
var Schema = mongoose.Schema;

/*var full_route = new Schema({

  url: {
    main: wiki,
    url_name: String
  }
})*/

var pageSchema = new Schema({
  title: String,
  url_name: String,
  //url_name: '/' + url.main + '/' + url.url_name,
  owner_id:   String,
  body:   String,
  date: { type: Date, default: Date.now },
  status: Number
});

var userSchema = new Schema({
  name:  {
      first: String,
      last: String
    },
  email: String
});

Page = mongoose.model('Page', pageSchema);
User = mongoose.model('User', userSchema);

pageSchema.virtual('url_name.full').get(function(){
  return this.url_name;
})

module.exports = {"Page": Page, "User": User};