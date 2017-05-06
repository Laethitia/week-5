
// hide the environment variable created a file .gitignored

require('dotenv').config(); // require node moduel dotenv, .config is going to load up the dotenv so it can load the module

//create an express app
var express = require('express'); // requiring the module which is express

var app = express(); // giving all the things express can do in this variable called app

app.get('/', function(request,respond) {
//respond.send("hello world");
//respond.end();
respond.json({
	"user" : process.env.DB_USER,
	"pass" : process.env.DB_PASS // using the key user DB to get the value and 
});
}); //('') // creates a get route (index.html and a function to do the ... this is back-end

app.listen(8080); // server to listens to all request

console.log("server is running");