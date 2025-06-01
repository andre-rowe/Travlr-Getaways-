// app.js
// ------
// Travlr Getaways MEAN‑stack server.
//
// • Express + Handlebars public site
// • REST API (trips CRUD + auth) backed by MongoDB
// • CORS so Angular admin SPA (localhost:4200) can call /api
//

require('dotenv').config();   // .env → MONGO_URL, JWT_SECRET, PORT …

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const hbsEngine = require('express-handlebars').engine;
const hbsPartials = require('hbs');

const app = express();

// ───────────────────────────────────────────────────────────
// 1. MongoDB connection
// ───────────────────────────────────────────────────────────
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('✅  MongoDB connected'))
    .catch(err => console.error('❌  Mongo connect error:', err));

// Register Mongoose models once (must be after connection)
require('./app_api/models/trip');
require('./app_api/models/user');    // comment out if you haven't created User

// ───────────────────────────────────────────────────────────
// 2. Handlebars (customer‑facing site)
// ───────────────────────────────────────────────────────────
app.engine('hbs', hbsEngine({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: path.join(__dirname, 'app_server', 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));
hbsPartials.registerPartials(
    path.join(__dirname, 'app_server', 'views', 'partials')
);

// ───────────────────────────────────────────────────────────
// 3. Global middleware
// ───────────────────────────────────────────────────────────
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());                // allow SPA cross‑origin
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ───────────────────────────────────────────────────────────
// 4. Routes
// ───────────────────────────────────────────────────────────
const authRouter = require('./app_api/routes/auth');   // /api/register & /api/login
const apiRouter = require('./app_api/routes');        // trips CRUD
const indexRouter = require('./app_server/routes/index');

app.use('/api', authRouter);  // mount auth first
app.use('/api', apiRouter);   // then other /api endpoints
app.use('/', indexRouter); // Handlebars pages

// ───────────────────────────────────────────────────────────
// 5. Start server
// ───────────────────────────────────────────────────────────
const port = process.env.PORT || 3000;
app.listen(port, () =>
    console.log(`🚀  Travlr server running at http://localhost:${port}`)
);

module.exports = app;   // for testing
