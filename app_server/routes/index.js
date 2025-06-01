const express = require('express');
const router = express.Router();

const mainCtrl = require('../controllers/main');     // Home controller
const travlrCtrl = require('../controllers/travlr'); // All other pages

// Home Page
router.get('/', mainCtrl.index);

// Content Pages
router.get('/travel', travlrCtrl.travel);
router.get('/rooms', travlrCtrl.rooms);
router.get('/meals', travlrCtrl.meals);
router.get('/news', travlrCtrl.news);
router.get('/about', travlrCtrl.about);
router.get('/contact', travlrCtrl.contact);

module.exports = router;
