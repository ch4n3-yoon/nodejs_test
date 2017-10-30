var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
    console.log("Connected");
});

app.listen(3000, function() {
    console.log('app listening on port 3000!');
});
