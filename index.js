var express = require("express");
var mongoose = require("mongoose");
var product = require("./server/product");
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
//Connect to MongoDB
mongoose.connect("localhost", "SportsStore")
var db = mongoose.connection;
db.on("error", function(e){
    console.log(e);
});
db.once("open", function(){
    console.log("Database connected.")
});
//Middleware
app.use(express.static('client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
//Routers
app.use("/products", product);
//Default Router
app.get('/',function(req,res,next){
    res.sendFile(__dirname+"/client"+"/index.html");
});
//Page Not Found
app.get('*',function(req,res,next){
    res.status(404).send('Error 404 Tha page does not exists');
});
//Initialize Server
app.listen(3000, function(){
    console.log("Running on http://localhost:3000");
});
