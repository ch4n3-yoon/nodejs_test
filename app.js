var express = require('express');
var app = express();

app.use(express.static('image'));

app.get('/', function(req, res) {
    var d = new Date();
    var n = d.getTime();

    var print = "Hello World<br>";
    print += "You can see the image <a href='/image'>here</a>";
    print += "<p>I will tell you the time. </p>";
    print += "<h1>"+d+"</h1>";
    res.send(print);
    console.log("Connected");
});

app.get('/image', function(req, res) {
    res.send("<h1>넘모넘모 재밋는거시다!</h1><img src='/dici.jpg'>");
});

app.listen(3000, function() {
    console.log('app listening on port 3000!');
});
