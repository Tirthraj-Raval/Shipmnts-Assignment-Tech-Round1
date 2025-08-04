const express = require("express");
const flightController = require("../controllers/flightControlller");
const router = express.Router();

router.post('/:shipment_number/flights/add', flightController.addFlight);

module.exports = router;

