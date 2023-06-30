const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
}, {
    timestamps: true //Question: why do we need this?
});

module.exports = mongoose.model('Flight', flightSchema);