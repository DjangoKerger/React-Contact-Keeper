const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); //protect this route

const { check, validationResult } = require('express-validator');

//bring in mongoose schema
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route       GET api/contacts
//@ description Get all users contacts
//@access       Private
router.get('/', auth, async (req, res)=> {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.err(err.message);
        res.status(500).send('Server error')
    }
});

// @route       POST api/contacts
//@ description Add new contact
//@access       Private
router.post('/', (req, res)=> {
    res.send('Add contact');
});

// @route       PUT api/contacts/:id
//@ description Update contact
//@access       Private
router.put('/:id', (req, res)=> {
    res.send('Update contact');
});

// @route       DELETE api/contacts/:id
//@ description Delete contact
//@access       Private
router.delete('/:id', (req, res)=> {
    res.send('Delete contact');
});


module.exports = router;