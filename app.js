var express = require('express');
var app = express();

app.use(express.static('image'));

app.get('/', function(req, res) {
    var d = new Date();

    var print = "Hello World<br>";
    print += "You can see the image <a href='/image'>here</a>";
    print += "<p>I will tell you the time. </p>";
    print += "<h1>"+d+"</h1>";

    if (typeof req.query.id === 'undefined')
    {
        req.query.id = "No input";
    }

    print += `<p>$_GET['id'] : ${req.query.id}</p>`;
    res.send(print);
    console.log("Connected");
});

app.get('/image', function(req, res) {
    res.send("<h1>nodejs는 넘모넘모 재밋는거시다!</h1><img src='/dici.jpg'>");
});

app.listen(3000, function() {
    console.log('app listening on port 3000!');
});
