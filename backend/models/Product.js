const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        description:{type:String, required:true},
        image:{type:String, required:true},
        categories:{type:Array, required:true},
        platforms:{type:Array, required:true},
        editions:[
            {
                editionName:{
                    type:String
                },
                editionPrice:{
                    type:Number
                }
            }
        ],
        inStock:{type: Boolean, default:true}
    },
    { timestamps:true }
);


module.exports = mongoose.model("Product", ProductSchema);