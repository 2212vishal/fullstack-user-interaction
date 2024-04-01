const express = require("express");
const cors = require('cors');
const app = express();
const data= require("./user.json");
const USER = require("./models/User")


require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());
app.use(cors());

const User = require("./routes/user");
const Query = require("./routes/search");
const Team = require("./routes/team");

app.use("/api/user", User);
app.use("/api/query", Query);
app.use("/api/team", Team);

// start server
app.listen(PORT, () => {
    console.log(`server started successfully at ${PORT}`);
});

// connect to the database
const dbConnect = require("./config/database");
dbConnect();

const insertUserData = async () => {
    try {
      const users = await USER.find({});
      if(!users || users.length === 0){
        // Remove existing data from the collection
        await USER.deleteMany();
    
        // Insert mock data into the collection
        await USER.insertMany(data);
        console.log('mock data added to MongoDB');
      }
    } catch (error) {
      console.error('Error populating database:', error);   
    }
};

// Call the function to insert the user data
insertUserData();



// default route
app.get("/", (req, res) => {
    res.send(`<h1>this is homepage body</h1>`);
});
