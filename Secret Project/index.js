import express from "express";
//copy the below 4 lines in every program, no need to memorize
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

//creating a middleware
var isUserAuthorized = false;

app.use(bodyParser.urlencoded({extended: true}));

function passwordCheck(req, res, next){
    const password = req.body["password"]; // In index.html name="password"
    if (password === "ILoveProgramming"){
        isUserAuthorized = true;
    }
    next();
};

app.use(passwordCheck);

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req,res)=>{
    if(isUserAuthorized){
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(3000, ()=>{
    console.log("SERVER IS RUNNING ON PORT 3000");
})