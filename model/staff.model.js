const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    nameStaff: String
})

const Staff = mongoose.model('Staff', staffSchema, informationSTaff);

module.exports = Staff;