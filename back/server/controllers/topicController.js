const Topic = require('../models/Topic');

const getTopics = async (req, res) => {
    const topics = await Topic.find();
    res.json(topics);
};

const createTopic = async (req, res) => {
    const newTopic = new Topic(req.body);
    await newTopic.save();
    res.status(201).json(newTopic);
};

module.exports = { getTopics, createTopic };