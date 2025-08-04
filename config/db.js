const mongoose = require("mongoose");

const connectToDB = async(req, res) => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        res.status(500).send("Database connection failed");
    }
}

module.exports = connectToDB;