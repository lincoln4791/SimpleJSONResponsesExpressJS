const express = require('express')

app = express()

app.get("/",function(req,res){
    res.send("Hello World Js")
})

app.get("/home",function(req,res){
    res.send("Hello Home")
})

app.post("/about",function(req,res){
    let myJson = [
        {
            "name":"Lincoln",
            "id":"47"
        },{
            "name":"Liza",
            "id":"48"
        }
    ]
    res.status(201)
    res.json(myJson)
})

app.listen(5050,function(){
    console.log("Server Run Success");
})

