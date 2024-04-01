const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    });
};

module.exports = dbConnect;
