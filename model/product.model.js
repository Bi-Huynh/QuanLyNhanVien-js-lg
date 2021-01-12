const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
})

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;