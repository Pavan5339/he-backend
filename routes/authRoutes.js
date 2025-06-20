const express = require('express');
const router = express.Router();
const { register } = require('../controllers/authController');
const { register, login } = require('../controllers/authController');

router.post('/login', login);
// Register route
router.post('/register', register);

module.exports = router;
