const express = require('express');
const router = express.Router();
const Contact = require('./models/contact')

router.get('/', (req, res) =>{
    res.render('index')
})

router.get('/contact', (req, res) =>{
    res.render('contact')
})

router.get('/education', (req, res) =>{
    res.render('education')
})

router.get('/favorites', (req, res) =>{
    res.render('favorites')
})

router.get('/mystory', (req, res) =>{
    res.render('mystory')
})

router.post('/submitContact', (req, res) =>{
    const contact = new Contact({
        fname: req.body.fname,
        lname: req.body.lname,
        reason: req.body.reason,
        email: req.body.email,
        message: req.body.message
    });

    Contact.collection.insertOne(contact)
    .then(result =>{
        res.render('contact')
    })
    .catch(err => console.log(err));
})

module.exports = router;