const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        first: {
            type: String,
            default: 'No',
            trim: true
        },
        last: {
            type: String,
            default: 'Name',
            trim: true
        }
    },
    img: String
})

const Staff = mongoose.model('Staff', staffSchema, 'informationStaff');

module.exports = Staff;