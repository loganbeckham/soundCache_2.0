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

const sampleController = require('./controllers/samplesController.js');
app.use('/samples', sampleController);

const userController = require('./Controllers/userController.js')
app.use('/user', userController)


/////////////////////////////////////
///             Routes             //
/////////////////////////////////////


/////////////////////////////////////
///             Server             //
/////////////////////////////////////

const mongodbURI = process.env.MONGODBURI

mongoose.connect(`${mongodbURI}`)
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
})

if(process.env.PORT){
	PORT = process.env.PORT
}

app.listen(PORT, ()=>{
	console.log(`listening on port ${PORT}`)
})