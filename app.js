const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items =[];

app.get("/",function(req,res){
  var today = new Date();
  var options = {
    day: "numeric",
    weekday: "long",
    month: "long"
  };

  var day =today.toLocaleString("en-US",options);
  // console.log(day);

  // res.send("HELLO");

  res.render("list",{kindOfDay: day,newItem:items});
});

app.post("/",function(req,res){
  var item = req.body.toDoItem;
  items.push(item);
  res.redirect("/");
});


app.listen(3000,function(){
  console.log("The server is running on port 3000");
});
