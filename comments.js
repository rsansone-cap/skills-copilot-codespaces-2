// Create web server
// Load the express module
var express = require('express');
// Create an express server
var app = express();
// Create a router
var router = express.Router();
// Create a body-parser
var bodyParser = require('body-parser');
// Create a database
var db = require('./db');
// Create a comment model
var Comment = require('./comment');
// Create a view engine
app.set('view engine', 'ejs');
// Create a views folder
app.set('views', './views');
// Create a public folder
app.use(express.static('public'));
// Create a body parser
app.use(bodyParser.urlencoded({ extended: true }));
