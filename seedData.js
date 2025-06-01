const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const Trip = require('./app_api/models/trips');

mongoose.connect('mongodb://127.0.0.1/travlr');

// Read and prepare seed data with slugs
const rawData = fs.readFileSync(path.join(__dirname, 'data', 'trips.json'), 'utf-8');
const trips = JSON.parse(rawData).map(trip => ({
    ...trip,
    slug: slugify(trip.title, { lower: true })
}));

// Insert into database
Trip.insertMany(trips)
    .then(() => {
        console.log('✅ Successfully inserted seed data');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('❌ Error inserting seed data:', err);
        mongoose.connection.close();
    });
