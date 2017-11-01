//app.js

// Load Packages
var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static('image'));
app.set('view engine', 'jade');     // I will use the Jade Engine

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'godhexor!@#',
    port    : 3306,
    database: 'ch4n3'
});

if (connection.state === 'disconnected')
{
    console.log("Can't connect to DB server");
}

else
{
    console.log("Database connected!!");
}


// Connect to MongoDB Server
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // Connected to MongoDB Server
    console.log("Connected to MongoDB Server");
});




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

app.get('/template',function(req, res){
    var d = new Date();
    res.render('time', {title: 'This is title', time: d});
});

app.get('/image', function(req, res) {
    res.send("<h1>nodejs는 넘모넘모 재밋는거시다!</h1><img src='/dici.jpg'>");
});


app.listen(3000);

