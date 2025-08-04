const express = require("express");
const cors = require("cors");
const session = require("express-session");
const connectToDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
connectToDB();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: "thisislittlesecret",
    resave: false,
    saveUninitialized : false,
    cookie : {secure: false}
}));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})