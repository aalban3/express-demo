const express = require("express")
const app = express()
app.set("view engine","ejs")

app.get(["/",'/home'], function(req,res){
    res.render("index");
})

const port = process.env.port || 3000;
app.listen(port,function(){
    console.log("serving application on port 3000!");
})