// const db = require('../config/db');

// const account = db.get('accounts');

const mongoose = require('mongoose');
const Account = require('../model/account.model');
const Staff = require('../model/staff.model');
const md5 = require('md5');

module.exports.index = (req, res) => {
    res.render('signUp/index_signup');
}

module.exports.postSignUp = (req, res) => {
    // tạo account
    // let id = account.value().length + 1;
    // let password = md5(req.account.Password);
    // account.push({ idStaff: id, userName: req.account.UserName, password: password }).write();
    let errors = [];

    if (req.body.Password !== req.body.RetypePassword) {
        errors.push('Mật khẩu không giống nhau');
        res.render('/signUp/index_signup', {
            _errors: errors,
        });
        return;
    }

    let staff = new Staff({
        _id: new mongoose.Types.ObjectId()
    });

    staff.save((err) => {
        if (err) {
            throw err;
        }
    });

    let account = new Account({
        _id: new mongoose.Types.ObjectId(),
        idStaff: staff._id,
        userName: req.body.UserName,
        password: md5(req.body.Password)
    });

    account.save((err) => {
        if (err) {
            throw err;
        }
    })

    res.render('login/index_login');
}