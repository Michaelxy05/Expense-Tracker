const express = require("express");

// require for Facebook login
// const path = require("path");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactexpenselist");

//Facebook login API
// app.use(express.static(path.resolve(__dirname, '/')))


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  
  var express = require('express');
  var app = express();
  var port = process.env.PORT || 8080;
  
  var cookieParser = require('cookie-parser');
  var session = require('express-session');
  var morgan = require('morgan');
  var mongoose = require('mongoose');
  var bodyParser = require('body-parser');
  var passport = require('passport');
  var flash = require('connect-flash');
  
  
  var configDB = require('./config/database.js');
  mongoose.connect(configDB.url);
  require('./config/passport')(passport);
  
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(session({secret: 'anystringoftext',
           saveUninitialized: true,
           resave: true}));
  
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
  
  
  
  
  app.set('view engine', 'ejs');
  
  
  // app.use('/', function(req, res){
  // 	res.send('Our First Express program!');
  // 	console.log(req.cookies);
  // 	console.log('================');
  // 	console.log(req.session);
  // });
  
  require('./app/routes.js')(app, passport);
  
  app.listen(port);
  console.log('Server running on port: ' + port);
  
  
  
  


});
