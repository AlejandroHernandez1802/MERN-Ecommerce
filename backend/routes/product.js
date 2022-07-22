const router = require('express').Router();
const CryptoJS = require('crypto-js');
const Product = require('../models/Product');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

//Create product
router.post("/addProduct", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//Update product
router.put("/update/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new:true});

        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }

});

//Delete product
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json("Account deleted.");
    }
    catch(err){
        res.status(500).json(err);
    }
});


//Get product 
router.get("/find/:id", async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);

        //If there's no errros, this message will be thrown
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json(err);
    }
});



//Get all products 
router.get("/findAll", async (req, res) => {

    //Condition to only bring the newest users
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qPlatform = req.query.platform;

    try{
        let products;
        if(qNew){
            products = await Product.find().sort({createdAt:-1}).limit(5);
        }
        else if(qCategory){
            products = await Product.find({categories:{$in: [qCategory]}});
        }
        else if(qPlatform){
            products = await Product.find({platforms:{$in: [qPlatform]}});
        }
        else{
            products = await Product.find();
        }

        //If there's no error, this message will be thrown
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;