//Module Import
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//Configure Mongoose to Connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/cms-build',{userNewUrlParser: true})
//    .then(res => {
//    console.log('MongoDB connected successfully')
//    .catch(
//        console.log('Database connect failed')
//    )
//})

//Configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/',(res, req)=>{
    res.send('Welcome to the CMS App');
})

app.listen(3000,()=>{
    console.log(`server running`)
})