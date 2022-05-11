const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread')

//INDEX
breads.get('/', (req, res) => {
    Bread.find()
    .then(foundBreads => {
        res.render('index', {
            breads: foundBreads,
            title: 'Index Page'
        })
    })
})

// CREATE
breads.post('/', (req, res) => {
    if (!req.body.image) {
        req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGlutten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

// DELETE
breads.delete('/:id', (req, res) => {
    Bread.findByIdAndDelete(req.params.id)
    .then(deleteBread => {
        res.status(303).redirect('/breads')
    })
})


// UPDATE
breads.put('/:id', (req, res) => {
    if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
    } else {
    req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updateBread => {
        console.log(updateBread)
        res.redirect(`/breads/${req.params.id}`)
    })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
    .then(foundBread => {
        res.render('edit', {
            bread: foundBread
        })
    })
})





// SHOW
// breads.get('/:arrayIndex', (req, res) => {
//     if (Bread[req.params.arrayIndex]) {
//     res.render('Show', {
//         bread:Bread[req.params.arrayIndex],
//         index: req.params.arrayIndex,
//     })
//     } else {
//     res.render('404')
//     }
// })

breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('show', {
                bread: foundBread
            })
        })
        .catch(err => {
            res.send('404')
        })
})



module.exports = breads