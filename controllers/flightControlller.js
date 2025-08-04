const Flight = require("../models/Flight");
const Shipment = require("../models/Shipment");

exports.addFlight = async (req, res) => {
    const {shipment_number} = req.params;

    const shipment = await Shipment.findOne({shipment_number: shipment_number});
    const {carrier, flight_number, departure, arrival} = req.body
    const flight = await Flight.create({
        carrier,
        departure,
        arrival,
        flight_number,
        shipment: shipment._id
    });

    res.status(200).json(flight);

}

exports.getFlightStatus = async(req, res) => {
    const {flight_number} = req.params;
    const flight = await Flight.findOne({flight_number});
    res.status(201).json(flight.status);
}

exports.updateFLightStatus = async(req, res) => {
    const {flight_number} = req.params;
    const {status} = req.body
    const flight = await Flight.findOne({flight_number});
    flight.status = status
    await flight.save();
    res.status(200).json(flight);
}