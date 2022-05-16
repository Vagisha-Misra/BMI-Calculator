const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    //__dirname is a constant that gives the filepath 
    //of the current file no matter where the file is hosted
    res.sendFile(__dirname + "/index.html");
    // console.log(__dirname);
});
app.post("/", function(req, res){
    // console.log(req.body);
    // res.send("Thanks for posting that");
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;
    res.send("The result of addition calculation is " + result);

});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res){
    var height = Number(req.body.height)/100;
    var weight = Number(req.body.weight);
    var bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});