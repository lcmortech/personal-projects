//Module Import
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//Configure express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000,()=>{
    console.log(`server running`)
})