const Shipment = require("../models/Shipment");

exports.createShipment = async (req, res) => {
    const {origin, shipment_number, destination} = req.body;

    try{
        const shipment = await Shipment.create({
            shipment_number: shipment_number,
            destination: destination,
            origin: origin
        });
        
        res.status(201).json({message: "Shipment created successfully", shipment});

    }
    catch(err) {
        console.error("Error occured while creating shipment",err)
    }

}

exports.addHop = async (req, res) => {
    const {shipment_number} = req.params;
    const {next_hop, previous_hop, new_hop} = req.body;

    const shipments = await Shipment.findOne({shipment_number: shipment_number});
    if(!shipments){
        console.error("No shipments found");
    }

    if(shipments.length == 0){
        shipments.hops.location.push(previous_hop);
        shipments.hops.location.push(new_hop);
        shipments.hops.location.push(next_hop);
    }
    for(let i=0; i<shipments.hops.length; i++){
        if (previous_hop === shipments.hops[i]){
            shipments.hops.location.push(shipments.hops[i])
            shipments.hops.location.push(new_hop)
        }
        else{
            shipments.hops.push(shipments.hops[i])
        }

    }
    await shipments.save();
    res.status(201).json(shipments)

}

exports.getHops = async(req, res) => {
    const {shipment_number} = req.params;
    if(!shipment_number){
        console.error("SHipment number not found");
    }

    const shipment = await Shipment.findOne({shipment_number: shipment_number});
    if(!shipment){
        console.error("No shipment found wtih this id");
    }

    res.status(200).json({message: "Shipment FOUnd", hops: shipment.hops});

}