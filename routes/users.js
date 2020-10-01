const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//bring in mongoose schema
const User = require('../models/User');

// @route       POST api/users
//@ description Register a user
//@access       Public

//post request with all the required checks, if checks are not passed 
//server will return status 400
router.post(
    '/', 
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'please enter a password with 6 or more characters')
        .isLength({ min: 6})
], 
(req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    res.send('passed')

}
);

module.exports = router;