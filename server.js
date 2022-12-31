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

const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false);

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})

const mongodbURI = process.env.MONGODBURI

mongoose.connect(mongodbURI, () => {
	console.log('connected to mongo');
})
