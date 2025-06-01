const express = require('express');
const router = express.Router();
const authCtl = require('../controllers/auth');

router.post('/register', authCtl.register);
router.post('/login', authCtl.login);

module.exports = router;
