
const express=require('express')
const adminRoutes=require('./router/admin')
const app=express()
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(adminRoutes)

app.listen(3000)