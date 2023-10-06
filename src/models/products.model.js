const mongoose = require("mongoose");

const productsCollection= "products"

const productSchema=new mongoose.Schema({
    title:{type:String,max:20,required:true},
    description:{type:String,max:30,required:true},
    code:{type:String,max:30,required:true},
    price:{type:Number,required:true},
    status:{type:Boolean,required:true},
    stock:{type:Number,required:true},
    cat:{type:String,max:30,required:true}
});

const productModel= mongoose.model(productsCollection,productSchema);

module.exports={productModel}