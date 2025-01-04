const e = require("express");
const express=require("express");
const app=express();
const path=require("path");
const port=8080;
app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
//public
app.use(express.static(path.join(__dirname,"public")));
app.use(express.static("public"));
//post
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//db
let users=[
    {
        name:"shiv",
        email:"shiv@123gmail.com",
        password:"1234"

    }
]
let admin={
        email:"shiv123@gmail.com",
        password:"1234"
    };


//route
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
//login for admin
app.get("/admin",(req,res)=>{
    res.render("adminlogin.ejs");
})
app.post("/admin",(req,res)=>{
    let {email,password}=req.body;
    if (email === "shiv123@gmail.com" && password === "1234") {
        res.render("admin.ejs",{users});
    } else {
        res.render("error.ejs");
    }
})
app.get("/register",(req,res)=>{
    res.render("register.ejs");
})
app.get("/login",(req,res)=>{
    res.render("userlogin.ejs");
})
app.post("/project",(req,res)=>{
    let{email,password}=req.body;
    //for loop for finding index and element
    for(let user of users){
        if(user.email===email&&user.password===password){
        res.render("project.ejs");
         break;
        }
    }
    res.render("error.ejs");
     
})
app.post("/register",(req,res)=>{
    let{name,email,password}=req.body;
    users.push({name,email,password});
    res.redirect("/login")
})

 
//server
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})