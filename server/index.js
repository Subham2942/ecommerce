const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
dotenv.config();

app.use(cors());

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe")

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



app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);