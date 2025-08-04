const Flight = require("../models/Flight");
const Shipment = require("../models/Shipment");

exports.addFlight = async (req, res) => {
    const {shipment_number} = req.params;

    const shipment = await Shipment.findOne({shipment_number: shipment_number});
    const {carrier, flightNumber, departure, arrival} = req.body
    const flight = await Flight.create({
        carrier,
        departure,
        arrival,
        flightNumber,
        shipment: shipment._id
    });

    res.status(200).json(flight);

}

exports.getFlightStatus = async(req, res) => {
    const {flightNumber} = req.params;
    const flight = await Flight.findOne({flightNumber});
    res.status(201).json(flight.status);
}