import express from "express";
const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Hello</h1>');
})

app.get('/about', (req,res)=>{
    res.send('<h1 style="text-align: center">About Section</h1><br><p style="text-align: center">Hey! My name is Kunj Maheshwari and I am a pre final student at VIT Bhopal University.</p>');
})

app.get('/contact', (req,res)=>{
    res.send('<h1 style="text-align: center">Contact Section </h1><br><p style="text-align: center">Phone number - 9876543210</p>');
})

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000.");
}) 