const express = require("express");
const app = express();
const port =8080;


app.get("/",(req,res)=>{
    console.log("Server is working");
    res.send("Welcome to server side");
});

app.listen(port,()=>{
    console.log("Server is listening on port 8080");
});