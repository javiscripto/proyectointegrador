const mongoose= require("mongoose");

const cartsCollection= "carts";

const cartsSchema= new mongoose.Schema({
    products: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        qty: {
            type: Number,
            default: 1
        }
    }]
});

const cartsModel= mongoose.model(cartsCollection,cartsSchema);

module.exports={cartsModel}


/////////////////

