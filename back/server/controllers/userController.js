const User = require('../models/User');

const validateUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ username: user.username });
};

module.exports = { validateUser };