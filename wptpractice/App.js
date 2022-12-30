var express=require("Express");
var app=express();

app.get("/",function(req,resp){
    resp.send("HELLOW WORLD");
})


app.listen(8000);
console.log("server is running at port 8000")