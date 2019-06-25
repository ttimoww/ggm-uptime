const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    day: String,
    date: String,
    tests: Array
})

const Day = mongoose.model('Day', daySchema)
module.exports = Day;