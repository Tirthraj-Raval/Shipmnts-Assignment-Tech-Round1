const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    carrier: {
        type: String,
        
    },
    flight_number : {
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
        enum: ['In-transit', 'landed'],
        default: 'In-transit'
    },

    shipment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    }

});

module.exports = mongoose.model('Flight', flightSchema);