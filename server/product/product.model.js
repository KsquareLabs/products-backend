/**
 * Created by cleverjam on 9/27/16.
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

});

var Product = mongoose.model("Product", productSchema);

module.exports = Product;
