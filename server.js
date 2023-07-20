const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
  res.sendFile(__dirname+"/main.html");

});
app.get("/index.html",function(req,res)
{
  res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){
  const Name =req.body.name;
  const pass =req.body.password;
  console.log(Name +"  "+pass);
  app.send(Name +"  "+pass);
});

app.get("/signup.html",function(req,res)
{
  res.sendFile(__dirname+"/signup.html");
})
app.get("/web5.html",function(req,res)
{
  res.sendFile(__dirname+"/web5.html");
})
app.get("/web4.html",function(req,res)
{
  res.sendFile(__dirname+"/web4.html");
})




app.listen(process.env.PORT||3000,function()
{
  console.log("server has started at 3000");
})
