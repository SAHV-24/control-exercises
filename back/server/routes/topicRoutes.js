const express = require('express');
const { getTopics, createTopic } = require('../controllers/topicController');
const router = express.Router();

router.get('/', getTopics);
router.post('/', createTopic);

module.exports = router;
