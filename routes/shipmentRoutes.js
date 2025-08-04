const express = require("express");
const shipmentRoutes = require("../controllers/shipmentController");
const router = express.Router();

router.post('/create', shipmentRoutes.createShipment);
router.post('/:shipment_number/hops/add', shipmentRoutes.addHop);
router.post('/:shipment_number/hops/', shipmentRoutes.getHops);

module.exports = router;
