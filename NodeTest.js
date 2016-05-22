var express = require('express');
var app = express();

app.get('/MyHomePage', function (req, res) {
  res.send('Hello World!');
});

var nodeServer = app.listen(22, function () {
  console.log('Example app listening on port 22!' + ' Server: ' + nodeServer.address().address);
});
