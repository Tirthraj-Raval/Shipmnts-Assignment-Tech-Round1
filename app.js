const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectToDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const shipmentRoutes = require("./routes/shipmentRoutes");

const app = express();
connectToDB();

app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
}))
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "thisislittlesecret",
    resave: false,
    saveUninitialized : false,
    cookie : {secure: false}
}));

//Shipments Routes
app.use('/api/shipments', shipmentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})