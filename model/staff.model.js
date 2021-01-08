const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nameStaff: {
        type: String,
        required: true
    }
})

const Staff = mongoose.model('Staff', staffSchema, 'informationSTaff');

module.exports = Staff;