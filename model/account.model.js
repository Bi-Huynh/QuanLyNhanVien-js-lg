const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'informationSTaff'
    },
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

const Account = mongoose.model('Account', accountSchema, 'accounts');

module.exports = Account;