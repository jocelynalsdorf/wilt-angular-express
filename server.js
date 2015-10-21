var express = require('express');
var app = express();
var path = require('path');

//set the public folder to serve assets
app.use(express.static(__dirname + '/public'));

//set up so that all routes go to index.html
app.get('*', function(req,res){
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//start the server
app.listen(8080);
console.log('magic happens on port 8080');