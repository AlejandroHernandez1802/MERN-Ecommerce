const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Order = require('../models/Order');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require('./verifyToken');

//Create order
router.post("/createOrder", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Update order
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});

        res.status(200).json(updatedOrder);
    }
    catch(err){
        res.status(500).json(err);
    }

});

//Delete order
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);

        res.status(200).json("Cart deleted.");
    }
    catch(err){
        res.status(500).json(err);
    }
});


//Get user orders
router.get("/find/:userId", verifyTokenAndAdmin,async (req, res) => {
    try{
        const orders = await Order.find({userId:req.params.userId});

        //If there's no errros, this message will be thrown
        res.status(200).json(cart);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Get all
router.get("/getAll", verifyTokenAndAdmin, async (req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//Get monthly income
router.get("/income", async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(new Date().setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    console.log(`${date} --- ${lastMonth} --- ${previousMonth}`);

    try{
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            { $project: { month: {$month:"$createdAt"}, sales:"$amount"} },
            { $group: { _id: "$month", total: { $sum: "$sales" } } }
        ]);
            
        res.status(200).json(income);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;