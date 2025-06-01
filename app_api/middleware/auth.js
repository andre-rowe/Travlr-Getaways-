const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const hdr = req.headers['authorization'] || '';
    const token = hdr.split(' ')[1];          // Expect "Bearer <token>"
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.sendStatus(403);    // token invalid or expired
        req.user = payload;                     // attach decoded user info
        next();
    });
};
