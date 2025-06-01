// app_api/controllers/trips.js
// ----------------------------
// CRUD handlers for /api/trips

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

// ------------------------------------------------------------------
// GET /api/trips  — list all trips
// ------------------------------------------------------------------
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});
        return res.status(200).json(trips);
    } catch (err) {
        return res.status(400).json({ message: 'Error fetching trips', error: err });
    }
};

// ------------------------------------------------------------------
// GET /api/trips/:tripCode — single trip
// ------------------------------------------------------------------
const tripsGetOne = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });
        if (!trip) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        return res.status(200).json(trip);
    } catch (err) {
        return res.status(400).json({ message: 'Error fetching trip', error: err });
    }
};

// ------------------------------------------------------------------
// POST /api/trips — add new trip
// ------------------------------------------------------------------
const tripsAdd = async (req, res) => {
    try {
        const newTrip = await Trip.create(req.body);
        return res.status(201).json(newTrip);
    } catch (err) {
        return res.status(400).json({ message: 'Failed to add trip', error: err });
    }
};

// ------------------------------------------------------------------
// PUT /api/trips/:tripCode — update existing trip
// ------------------------------------------------------------------
const tripsUpdate = async (req, res) => {
    try {
        const updated = await Trip.findOneAndUpdate(
            { code: req.params.tripCode },
            req.body,
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        return res.status(200).json(updated);
    } catch (err) {
        return res.status(400).json({ message: 'Update failed', error: err });
    }
};

// ------------------------------------------------------------------
// DELETE /api/trips/:tripCode — remove trip
// ------------------------------------------------------------------
const tripsDelete = async (req, res) => {
    try {
        const deleted = await Trip.findOneAndDelete({ code: req.params.tripCode });
        if (!deleted) {
            return res.status(404).json({ message: 'Trip not found' });
        }
        return res.status(200).json({ message: 'Trip deleted successfully' });
    } catch (err) {
        return res.status(400).json({ message: 'Deletion failed', error: err });
    }
};

// ------------------------------------------------------------------
// Export
// ------------------------------------------------------------------
module.exports = {
    tripsList,
    tripsGetOne,
    tripsAdd,
    tripsUpdate,
    tripsDelete
};
