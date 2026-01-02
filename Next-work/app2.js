const express = require('express');
const app2 = express();
const path = require('path');
const userModel = require('./models/user');
const { name } = require('ejs');

app2.set("view engine","ejs");
app2.use(express.json());
app2.use(express.urlencoded({extended:true}));
app2.use(express.static(path.join(__dirname,'public')));

app2.get('/',(req,res) =>{
    res.render("index");
})
 
app2.get('/read',async (req,res) =>{
    let users = await userModel.find();
    res.render("read",{users});
})

app2.get('/edit/:id',async (req,res) =>{
    let user = await userModel.findOne({_id:req.params.id});
    res.render("edit",{user});
})

app2.post('/delete/:userid',async (req,res) =>{
    let{name,email,imageurl} = req.body;
    let users = await userModel.findOneAndUpdade({_id:req.params.userid},{name,email,imageurl},{new:true});   
    res.redirect("/read");
})

app2.post('/create', async (req,res) =>{
    let {name,email,imageurl} = req.body;
  let createdUser = await userModel.create({
        name,
        email,
        imageurl,
    });
    res.redirect("/read");
}) 


app2.listen(3000);