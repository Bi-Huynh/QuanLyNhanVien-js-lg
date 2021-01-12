const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idStaff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'informationSTaff'
    },
    userName: {
        type: String,
        require: true,
        trim: true,
        validate: [
            {
                validator: (text) => {
                    return text.length !== 10;
                },
                msg: 'information user name must be 10 characters'
            }
        ]
    },
    password: {
        type: String,
        require: true,
        trim: true,
        validate: [
            {
                validator: (text) => {
                    return text.length >= 10;
                },
                msg: 'information password greater than 10 characters'
            }
        ]
    }
});

const Account = mongoose.model('Account', accountSchema, 'accounts');

module.exports = Account;