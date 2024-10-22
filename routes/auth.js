const express = require('express');
const { registerUser, authUser } = require('../controllers/auth');
const { check } = require('express-validator');
const router = express.Router();

// User registration route
router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
], registerUser);

// User login route
router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
], authUser);

module.exports = router;
