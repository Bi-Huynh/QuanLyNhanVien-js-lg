const mongoose = require('mongoose');

const sessionScheme = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    cart: [
        {
            productID: String,
            amount: Number
        }
    ]
})

const Session = mongoose.model('Session', sessionScheme, 'session');

module.exports = Session;