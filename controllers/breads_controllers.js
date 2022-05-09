const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

//INDEX
breads.get('/', (req, res) => {
    res.render('Index', 
        {
            breads: Bread,
            title: 'Index Page'
        }
    )
    //res.send(Bread)
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = 'https://placekitten.com/200/300'
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten === 'true'
    } else {
        req.body.hasGlutten === 'false'
    }
    Bread.push(req.body)
    res.redirect(Bread)
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})




// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })
    } else {
    res.render('404')
    }
})


module.exports = breads