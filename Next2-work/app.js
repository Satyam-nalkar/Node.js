const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

// app.get("/",function(req,res){
//     bcrypt.compare("abcdefghijk", "$2b$10$Bq53BSYVcrx02BkciJIfJOTs66zlfuWQmpCZXS8Tpolzl1/2.s5xm", function(err, result) {
//         console.log(result);
//     });
        // Store hash in your password DB.  
// 

app.get("/",function(req,res){
   let token = jwt.sign({email:"harsh@example.com"},"secret");
   res.cookie("token",token);
   res.send("done");   
    }); 
// });
// })

app.get("/read",function(req,res){
        let data = jwt.verify(req.cookies.token,"secret");
        console.log(data);
})
app.listen(3000);