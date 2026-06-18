const express= require('express');
const Authmodel = require('../models/auth'); 
const bcrypt = require('bcrypt');

async function authData(req,res){
   const {username,email,password}=req.body;
   const userExist= await Authmodel.findOne({username});
   if(userExist){
    return res.status(400).json({message:"User already exists"});
   }
   const emailExist= await Authmodel.findOne({email});
   if(emailExist){
    return res.status(400).json({message:"Email already exists"});
   }
    const hashedPassword = await bcrypt.hash(password,10);

const newUser = new Authmodel({
    username,
    email,
    password: hashedPassword
});
    await newUser.save();
    res.status(201).json({message:"User created successfully"});
}
 
module.exports={authData};