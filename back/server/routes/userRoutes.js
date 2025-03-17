const express = require('express');
const { validateUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', validateUser);

module.exports = router;