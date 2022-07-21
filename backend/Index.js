const express = require('express'); //Importing express
const app = express(); //Creating the server app
const mongoose = require('mongoose'); //Used to connect to the mongodb database
const dotenv = require('dotenv'); //Allow us to use environment variables for security.
const cors = require('cors');
//Routes imports
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');

//dotenv config
dotenv.config();

//Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB connection successfull"))
.catch((err)=> {
    console.log(err);
});


//Middelwares
app.use(express.json());
app.use(cors());


//This will use the specific route when the endpoint is used
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

//Putting on the server
const port = process.env.PORT;
app.listen(port || 3001, () => {
    console.log(`Backend server running at port ${port}`);
});