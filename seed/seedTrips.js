/**
 * seed/seedTrips.js
 * -----------------
 * Quick one‑shot seeder for the Travlr Getaways trips collection.
 *
 * Usage:
 *   node seed/seedTrips.js          # uses .env → MONGO_URL
 */

require('dotenv').config();         // pull in MONGO_URL from .env
const mongoose = require('mongoose');
const path = require('path');

// --- 1.  Model ------------------------------------------------------------
const Trip = require(path.join(__dirname, '..', 'app_api', 'models', 'trip'));

// --- 2.  Sample data ------------------------------------------------------
// Put your seed records in data/trips.json  (array of plain objects)
const trips = require(path.join(__dirname, '..', 'data', 'trips.json'));

// --- 3.  Seed routine -----------------------------------------------------
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {});
        console.log('✅  Mongo connected');

        // Wipe existing trips (comment out the next line if you want to append)
        await Trip.deleteMany({});
        console.log('🗑️   Old trips removed');

        // Insert seed records
        await Trip.insertMany(trips);
        console.log(`🌱  ${trips.length} trip(s) inserted`);

    } catch (err) {
        console.error('❌  Seed error:', err);
    } finally {
        await mongoose.disconnect();
        process.exit();                 // Ensure script exits
    }
})();
