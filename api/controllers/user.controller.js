const mongoose = require('mongoose');
const Staff = require('../../model/staff.model');

module.exports.index = async (req, res) => {
    try {
        let staffs = await Staff.find({}).sort({ 'name.first': -1 });
        res.json(staffs);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports.search = async (req, res) => {
    let query = req.query.q;

    if (!query) {
        res.json({ message: err });
        console.log('No search');
        return;
    }

    try {
        // { name: { first: { $regex: query, $options: 'i' } }
        let staffs = await Staff.find({
            $or: [
                { 'name.first': { $regex: query, $options: 'i' } },
                { 'name.last': { $regex: query, $options: 'i' } }
            ]
        })
            .sort({ 'name.first': -1 });
        res.json(staffs);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports.viewCreate = (req, res) => {
    res.render('user/create_user');
}

module.exports.getID = async (req, res) => {
    // sử dụng địa chỉ có tên là 'Router parameters'
    let userID = req.params.userID;

    if (!userID) {
        console.log("userID undifine");
        return;
    }

    try {
        let user = await Staff.findById(userID);
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports.postCreate = async (req, res) => {
    let newStaff = new Staff({
        _id: new mongoose.Types.ObjectId(),
        name: { first: req.body.name },
        img: req.file.filename
    });

    try {
        let staff = await newStaff.save();
        res.json(staff);
    } catch (err) {
        res.json({ message: err });
    }

    res.redirect('/user');
}