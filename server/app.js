var express = require('express');
var app = express();
var path = require('path');
var data = require('./public/data/amanda.json');

//serves this file to the basic page this is creating a path
app.get('/', function(request, response, next) {
  //renders html file on that domain
  response.sendFile(path.join(__dirname, './views/index.html'));

});

app.use('/public', express.static(__dirname + '/public'));

//stars server listening
var server = app.listen(process.env.PORT || 3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('I am Listening');
});
