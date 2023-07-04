const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {type: String, enum: ['AUS', 'DFW', 'SJU', 'LAX']},
    arrival: {type: Date}
},
    // "time stamp": true
);

//both could have been named Schema
const flightSchema = new mongoose.Schema({
    airline: {type: String, enum: ['American', 'Frontier', 'Southwest', 'United'], default: 'United'},
    airport: {type: String, enum: ['DEN', 'ATL', 'SFO', 'ORD'], default: 'DEN'},
    flightNo: {type: Number, min: 10, max: 9999},
    departs: {type: Date, 
        default: function() {return new Date().setFullYear(new Date().getFullYear() + 1);}
    },
    destinations: [destinationSchema]
}, {
    timestamps: true //Question: why do we need this?
});

module.exports = mongoose.model('Flight', flightSchema);
//my key 'Flight' is connected to my flightSchema so where 'Flight', it will call upon that specific schema