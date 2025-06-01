// app_api/models/trip.js
// ----------------------
// Mongoose model for a Travlr Getaways trip record.

const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        length: { type: String, required: true },   // e.g. "7 days"
        start: { type: Date, required: true },   // trip start date
        resort: { type: String, required: true },
        perPerson: { type: Number, required: true },   // price per person
        image: { type: String, required: true },   // filename only, not full path
        description: { type: String, required: true }
    },
    { timestamps: true }  // adds createdAt / updatedAt fields automatically
);

// Export the compiled model so controllers can `require` it.
module.exports = mongoose.model('Trip', tripSchema);
