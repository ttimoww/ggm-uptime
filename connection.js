require('dotenv').config();

// Make connection
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@ggm-mecn6.mongodb.net/Uptime?retryWrites=true&w=majority`, { useNewUrlParser: true});
const connection = mongoose.connection;

// Listeners on connection
connection.on('connected', () => console.log('Connected to Database'))
connection.on('disconnected', () => console.log('Lost DB connection'))
connection.on('error', (err) => console.log('DB error: ', err))

// Export
module.exports = connection;