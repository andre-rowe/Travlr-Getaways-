const jwt = require('jsonwebtoken');
const User = require('../models/user');

const signToken = (u) =>
    jwt.sign({ id: u._id, email: u.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

exports.register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({ token: signToken(user) });
    } catch (e) { res.status(400).json({ message: 'Registration failed', error: e }); }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.validatePassword(password)))
        return res.status(401).json({ message: 'Invalid credentials' });
    res.json({ token: signToken(user) });
};
