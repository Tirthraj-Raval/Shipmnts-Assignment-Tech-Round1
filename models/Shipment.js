const mongoose = require("mongoose");

const hopsSchema = new mongoose.Schema({
    location: [{
        type: String
    }]
});

const shipmentsSchema = new mongoose.Schema({
    shipment_number : {
        type: String,
        unique: true
    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    hops: [{
        type: String,
        
    }],

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

});

module.exports = mongoose.model('Shipment', shipmentsSchema);