const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    carrier: {
        type: String,
        required: true
    },
    flightNumber : {
        type: String,
        required: true
    },
    departure: {
        type: Date
    },
    arrival : {
        type: Date
    },
    status : {
        type: String,
        enum: ['Scheduled', 'Departed', 'Arrived'],
        default: 'Scheduled'
    },

    shipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    }

});

module.exports = mongoose.model('Flight', flightSchema);