import express from "express";
const app = express();

app.get('/', (req, res)=>{
    res.send("<h1>Home page</h1");
});

app.post('/register', (req,res)=>{
    res.sendStatus(201);
});

app.put("/user/kunj", (req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/kunj", (req,res)=>{
    res.sendStatus(200);
});

app.delete("user/kunj", (req,res)=>{
    res.sendStatus(200);
});

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000.")
});