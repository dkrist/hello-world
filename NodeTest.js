var express = require('express');
var app = express();

app.get('/MyHomePage', function (req, res) {
  res.send('Hello World!');
});

var nodeServer = app.listen(3000, function () {
  console.log('Example app listening on port 3000!' + ' Server: ' + nodeServer.address().address);
});
