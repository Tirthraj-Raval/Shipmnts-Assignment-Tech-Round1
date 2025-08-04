const express = require("express");
const flightController = require("../controllers/flightControlller");
const router = express.Router();

router.post('/:shipment_number/flights/add', flightController.addFlight);
router.get('/:flight_number/status', flightController.getFlightStatus);
router.put('/:flight_number/status', flightController.updateFLightStatus);

module.exports = router;

