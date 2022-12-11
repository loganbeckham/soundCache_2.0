const express = require('express');
const router = express.Router();

/////////////////////////////////////
///             Models             //
/////////////////////////////////////
const Sample = require('../Models/samples.js')
const Collection = require('../Models/myCollections.js')


/////////////////////////////////////
///             Routes             //
/////////////////////////////////////

// POST ROUTE ADD STRAIGHT TO COLLECTION OR JUST SAMPLE LIST
router.post('/' , (req, res) => {
    Collection.findById(req.body.collectionID, (err, foundCollection) => {
        Sample.create(req.body, (err, createdSample) =>{
            if (foundCollection == true) {
                foundCollection.samples.push(createdSample)
                foundCollection.save((err, data) => {
                res.json(createdSample)
                })
            } else {
                res.json(createdSample)
            }
            
        });
    })
});

// GET ROUTE
router.get('/', (req, res) => {
    Sample.find({}, (err, foundSample) => {
        res.json(foundSample)
    })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Sample.findByIdandRemove(req.params.id, (err, deletedSample) => {
        res.json(deletedSample)
    })
})

// PUT ROUTE
router.put('/:id', (req, res) => {
    Sample.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedSample) => {
        res.json(updatedSample)
    })
});

module.exports = router