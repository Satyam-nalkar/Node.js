const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/',(req,res) =>{
    res.send("hey");
})

app.get('/create',async (req,res) =>{
    const createduser = await userModel.create({
        name:"Harshika", 
        email:"harshiii@gmail.com",
        username:"harshika"
    })
    res.send(createduser); 
})


app.get('/update',async (req,res) =>{
    // userModel.findOneUpdate(findone,update, {new: true});  
   let updateduser = await  userModel.findOneAndUpdate({username:"harsh"},{name:"harsh vandana sharma"}, {new: true});  
    res.send(updateduser); 
})

app.get("/read",async (req,res) =>{
   let users = await userModel.find();  
    res.send(users);
})

app.get("/delete",async (req,res) =>{
   let users = await userModel.findOneAndDelete({username:"harsh"});  
    res.send(users);
})

app.listen(3000);   