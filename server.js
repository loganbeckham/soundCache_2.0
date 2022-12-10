/////////////////////////////////////
///             Dependancies       //
/////////////////////////////////////

const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express();

const Collection = require('./models/myCollections.js')


/////////////////////////////////////
///             Routes             //
/////////////////////////////////////


/////////////////////////////////////
///             Server             //
/////////////////////////////////////

const mongodbURI = process.env.MONGODBURI

mongoose.connect(mongodbURI, () => {
    console.log('connected to mongo');
})

if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
	console.log('listening');
})