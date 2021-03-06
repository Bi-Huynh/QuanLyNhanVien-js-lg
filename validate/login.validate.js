// const db = require('../config/db');
const Account = require('../model/account.model');
const md5 = require('md5');

// const accounts = db.get('accounts');

module.exports.checkLogin = async (req, res, next) => {
    let errors = [];

    if (!req.body.UserName) {
        // không tồn tại userName
        errors.push('User name account is required.');
    }

    if (!req.body.Password) {
        // không tồn tại password
        errors.push('Password account is required.');
    }

    // let account = accounts.value().find(acc => acc.userName == req.body.UserName && acc.password == md5(req.body.Password));
    await Account.find({
        userName: { $eq: req.body.UserName },
        password: { $eq: md5(req.body.Password) }
    }).exec((err, account) => {
        if (err) {
            console.error("err: " + err);
            return;
        }

        if (account) {
            req.staff = account[0].idStaff;
            // việc gán như này để cho sau khi next trong req có lưu biến account để có thể sử dụng
            next();
        } else {
            errors.push('account does not exist.');
        }

        if (errors.length > 0) {
            res.render('login/index_login', {
                _errors: errors,
                _value: req.body
            });
            return;
        }
    })
    //nếu chạy hết vòng lặp mà không vô được thì hiển thị lỗi không tồn tại tài khoản

}