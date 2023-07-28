const express = require('express');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs');

router.get('/', function(req, res){
    // res.sendFile(path.join(__dirname, '../templates/index.html'));
    res.render('home');
});

router.get('/blog', function(req, res){
    // blogs.forEach(element =>{
    //     console.log(element.title);
    // });
    // res.sendFile(path.join(__dirname, '../templates/blogHome.html'));
    res.render('blogHome', {
        blogs: blogs
    });
});

router.get('/blogpost/:slug', function(req, res){
    myBlog = blogs.filter((element)=>{
        return element.slug == req.params.slug
    });
    // console.log(myBlog);
    // res.sendFile(path.join(__dirname, '../templates/blogPage.html'));
    res.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog.content
    });
});

module.exports = router;