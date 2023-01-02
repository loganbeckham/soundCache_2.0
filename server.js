/////////////////////////////////////
///             Dependancies       //
/////////////////////////////////////

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())


/////////////////////////////////////
///             Controllers        //
/////////////////////////////////////

const collectionController = require('./Controllers/collectionsController.js')
app.use('/collections', collectionController);

const userController = require('./Controllers/userController.js')
app.use('/user', userController)


/////////////////////////////////////
///             Server             //
/////////////////////////////////////

mongoose.set('strictQuery', false);

app.listen(process.env.PORT || 3000, ()=>{
	console.log("listening on port")
})

mongoose.connect('mongodb+srv://logan:3DXkXrgBZb4nUrqg@soundcache.sh9nzgs.mongodb.net/?retryWrites=true&w=majority', () => {
	console.log('connected to mongo');
})
