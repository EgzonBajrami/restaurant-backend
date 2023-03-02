const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    section:{
        type:String,
        required:true,
    },
    ingredients:[{
        type:String,
        required:true,
    }],
    price:{
        type:Number,
        required:true
    },
    image:[{
        type:String,
        required:true,
    }]

})
const productsModel = mongoose.model('products',productSchema);
module.exports = productsModel;