const express=require("express");
const path=require("path");
const { v4: uuidv4 } = require("uuid");
const app=express();
const methodOverride=require("method-override");
app.use(methodOverride('_method'));
const port=8080;


app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//we dont have a database so lets make a array-->
let posts=[
    {  
        id:uuidv4(),
        username:"Rajat Tyagi",
        content:"I am the Best"
    },
    { 
        id:uuidv4(),
        username:"Raj Aryan",
        content:"Ok Google"
    },
    {   
        id:uuidv4(),
        username:"Happy singh",
        content:"oye paaji has bhi liya karo"
    }
];

//1st API-->(to get main page that is all posts)(index route)
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

//2nd API-->(to add a new post)(create route)
//for this we need to create 2 routes 1st will be get to serve the route(/posts/new) and 2nd will be post to add new posts

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
})

//to get one post(View route)--->
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    // console.log(post);

    res.render("show.ejs",{post});
})


//patch-->{to update edit post}

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(post);
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})

//to delete-->
app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    // res.send("delete success");
    res.redirect("/posts");

})
app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});
