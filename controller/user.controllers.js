const db = require('../config/db');
const informationStaff = db.get('informationStaff');

const mongoose = require('mongoose');
const Staff = require('../model/staff.model');

module.exports.index = async (req, res) => {
    let staffs = await Staff.find({});

    if (staffs.length == 0) {
        res.render('user/index_user');
    }
    else {
        res.render('user/index_user', {
            _listStaff: staffs
        });
    }
}

module.exports.search = async (req, res) => {
    let query = req.query.searchStaff;
    // let arrStaff = staffs.filter(staff => {
    //     return staff.nameStaff.toLowerCase().indexOf(query.toLowerCase()) !== -1
    // });
    let arrStaff = await Staff.find({ name: { last: 'd' } }).exec();
    // chưa fix được
    // `/.../i` không phân biệt hoa thường
    if (arrStaff) {
        res.render('user/index_user', {
            _listStaff: arrStaff
        });
    } else {
        console.log('khong lay duoc danh sach');
    }
}

module.exports.viewCreate = (req, res) => {
    res.render('user/create_user');
}

module.exports.getID = (req, res) => {
    // sử dụng địa chỉ có tên là 'Router parameters'
    let userID = req.params.userID;
    Staff.findById(userID, async (err, user) => {
        let arrStaff = await Staff.find({});

        if (err) {
            res.render('user/index_user', {
                _listStaff: arrStaff
            });
            console.error(err);
            throw err;
        }

        res.render('user/index_user', {
            _informationStaff: user,
            _listStaff: arrStaff
        });
    });

}

module.exports.postCreate = (req, res) => {
    let newStaff = new Staff({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        img: req.file.filename
    });

    newStaff.save(err => {
        if (err) {
            console.log(err);
            throw err;
        }
    });

    res.redirect('/user');
}