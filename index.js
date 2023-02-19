var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! My name Shvet 19-02-2023");
});

app.listen(3000);