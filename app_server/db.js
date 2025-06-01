// app_server/db.js
const mongoose = require('mongoose');

// MongoDB databas
const dbURI = 'mongodb://127.0.0.1/travlr';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// CONNECTION EVENTS
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
