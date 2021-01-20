// const db = require('../config/db');
const Account = require('../../model/account.model');
const md5 = require('md5');

// const accounts = db.get('accounts');

module.exports.checkLogin = async (req, res, next) => {
    let errors = [];
    let userName = req.body.UserName;
    let password = req.body.Password;

    if (!userName) {
        // không tồn tại userName
        errors.push('User name account is required.');
    }

    if (!password) {
        // không tồn tại password
        errors.push('Password account is required.');
    }

    try {
        let account = await Account.findOne({
            $and: [
                { userName: { $eq: userName } },
                { password: { $eq: md5(password) } }
            ]
        });

        if (account) {
            req.staff = account.idStaff;
            next();
        }
        else {
            errors.push('The acount was not found');
        }
    } catch (err) {
        res.json({ message: err, note: 'Error login validate checkLogin' });
    }
    //nếu chạy hết vòng lặp mà không vô được thì hiển thị lỗi không tồn tại tài khoản

    if (errors.length > 0) {
        res.render('login/index_login', {
            _errors: errors,
            _value: req.body
        });
        return;
    }
}