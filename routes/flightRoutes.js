const express = require("express");
const flightController = require("../controllers/flightControlller");
const router = express.Router();

router.post('/:shipment_number/flights/add', flightController.addFlight);
router.put('/:flightNumber/status', flightController.getFlightStatus);

module.exports = router;

