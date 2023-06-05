const express = require('express');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")));

app.use('/', require(path.join(__dirname, 'routes/blog.js')));


app.listen(5000, function(){
    console.log("Server is running on the port 5000.");
});