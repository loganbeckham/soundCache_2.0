const express = require('express');
const requireAuth = require('../middleware/requireAuth')
const router = express.Router();



// require auth for collections routes
router.use(requireAuth)

/////////////////////////////////////
///             Models             //
/////////////////////////////////////
const Collection = require('../Models/myCollections.js')


/////////////////////////////////////
///             Routes             //
/////////////////////////////////////

// POST ROUTE
router.post('/', (req, res) => {
    Collection.create(req.body, (err, createdCollection) => {
        res.json(createdCollection)
    });
});

// GET ROUTES
router.get('/', (req, res) => {
    Collection.find({}, (err, foundCollections) => {
        res.json(foundCollections)
    })
})

// GET BY ID

router.get('/:id', (req, res) => {
    Collection.findById(req.params.id, (err, foundCollection) => {
        res.json(foundCollection)
    })
})

// DELETE ROUTE
router.delete('/:id', (req, res) => {
    Collection.findByIdAndRemove(req.params.id, (err, deletedCollection) => {
        res.json(deletedCollection)
    })
})

// PUT ROUTE
router.put('/:id', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedCollection) => {
        res.json(updatedCollection)
    })
});

// ADD TO COLLECTION
router.put('/addTo/:id', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, {
        $push: {
            'samples': {
                name: req.body.name,
                preview: req.body.preview
            },
        },
    }, {new:true}, (err, updatedModel) => {
        res.json(updatedModel)
    })
})

// RENAME SAMPLE
router.put('/rename/:id/:index', (req,res) => {
    Collection.findOneAndUpdate(
        {
            _id: req.params.id,
            'samples._id': req.params.index
        },
        {
            $set : {'samples.$.name': res.body.name}
        }, {new: true}, (err, updatedModel) => {
        }
    )
})

router.delete('/:id/:index', (req, res) => {
    Collection.findByIdAndUpdate(req.params.id, {
        $pull: {
            'samples': {
                _id: req.params.index
            },
        },
    }, {new:true}, (err, updatedModel) => {
    })
})

module.exports = router