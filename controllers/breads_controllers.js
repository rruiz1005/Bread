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


//show
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads