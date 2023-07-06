
const express=require('express')
const fs=require('fs')
const router=express.Router()

router.get('/login',(req,res)=>{
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action='/user' method='POST'><input id='username' name='username' type='text'/><button type='submit'>add user</button></form>`)
})

router.post('/user',(req,res)=>{
    
    res.redirect('/')
})

router.post('/message',(req,res)=>{
    
    fs.appendFile('usermsg.txt',`${req.body.username}: ${req.body.message}, \n`,(err)=>{
        if (err){
            console.log(err)
        }
        else{
            res.redirect('/')
        }
    })
    
})

router.get('/',(req,res)=>{
    let x=fs.readFileSync("usermsg.txt", "utf8")
    res.send(`<p>${x}</p>
    <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action='/message' method='POST'>
    <input name='message' type='text'/>
    <input type='hidden' name='username' id='username' type='text'/>
    <button type='submit'>send message</button></form>`)
})

module.exports=router

