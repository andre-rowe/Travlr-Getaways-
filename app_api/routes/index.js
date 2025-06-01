// app_api/routes/index.js
// -----------------------
// All REST endpoints beneath /api

const express = require('express');
const router = express.Router();

const tripsCtrl = require('../controllers/trips');
const auth = require('../middleware/auth');   // JWT guard

// ───────────────────────────────────────────────────────────
// Trip routes
// ───────────────────────────────────────────────────────────

// Public reads
router.get('/trips', tripsCtrl.tripsList);
router.get('/trips/:tripCode', tripsCtrl.tripsGetOne);

// Protected writes (must include  Authorization: Bearer <token> )
router.post('/trips', auth, tripsCtrl.tripsAdd);
router.put('/trips/:tripCode', auth, tripsCtrl.tripsUpdate);
router.delete('/trips/:tripCode', auth, tripsCtrl.tripsDelete);

module.exports = router;
