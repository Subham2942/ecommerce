const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const userRoute = require("./routes/user");

const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then( ()=> {
        console.log("Database is connected!");
        app.listen(process.env.PORT || 4000, ()=>{
            console.log(`Backend sever is running on port ${process.env.PORT}`);
        });
        
    })
    .catch(err => {
         console.log(err);
    }
);

app.use("/api/user", userRoute);

