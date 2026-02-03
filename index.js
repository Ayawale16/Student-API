const express = require("express");
const app = express();
const port =8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");


app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true}));

let students=[
    {
        id:uuidv4(),
        name:"Atharva",
        rollno:101,
        course:"Computer Science"
    }
];


app.get("/students",(req,res)=>{
  res.render("view.ejs", { students: students });
});



app.post("/students",(req,res)=>{
    const newStudent={
        id: uuidv4(),
        name: req.body.name,
       rollNo: req.body.rollNo,
       course: req.body.course
  };

  students.push(newStudent);
  res.redirect("/students");
});


app.post("/students/:id/delete",(req,res)=>{
    const id = req.params.id; 
    students=students.filter(student=>student.id!==id);
    res.redirect("/students");
});




app.listen(port,()=>{
    console.log("Server is listening on port 8080");
});