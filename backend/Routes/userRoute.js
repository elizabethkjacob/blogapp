const express = require("express");
const router = express.Router();
const users = require("../model/user");
const jwt = require('jsonwebtoken');
router.use(express.json());
//route for signup
router.post('/',async(req,res)=>{
    try {
        const data = req.body;
        let newuser = await users(data).save();
        console.log(newuser);
        res.status(200).send({message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
// route for login

router.post('/login',async(req,res)=>{
   let Username  = req.body.Username;
   let Password = req.body.Password;

   const user = await users.findOne({Username:Username});
    if(!user){
       res.json({message:"user not found"});
    }
   try {
       if(user.Password == Password){
        let payload={Username:Username,Password:Password}
        let token = jwt.sign(payload,'reactblogapp');
        res.send({message:"login sucessful",token:token})
        }
        else{
           res.json({message:"login failed"})
        }
   } catch (error) {
       console.log(error)
   }
})
module.exports= router;




// const { route } = require("./userRoutes");
