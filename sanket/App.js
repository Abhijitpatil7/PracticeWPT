var express=require("express");
var app=express();
var path=require("path");
var fs=require("fs");


app.use(express.static(path.join(__dirname,'public')));


app.get('/', function (req, res) {
    res.sendFile(path.join(___dirname + '/index.html'));
 });
 console.log("Example app listening at http://localhost:8000");
app.listen(8000);