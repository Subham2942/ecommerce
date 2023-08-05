const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
dotenv.config();

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

const url = process.env.MONGODB_URI;

app.use(express.json());

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then( ()=> {
        console.log("Database is connected!");
        app.listen(process.env.PORT || 4000, ()=>{
            console.log(`Backend sever is running on port ${process.env.PORT}`);
        });
        
    })
    .catch(err => {
         console.log(err);
         console.log("Cannot connect to database");
    }
);



app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);