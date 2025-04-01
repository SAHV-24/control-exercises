const express = require('express');
const { validateUser, createUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', validateUser);
router.post('/', createUser);

module.exports = router;