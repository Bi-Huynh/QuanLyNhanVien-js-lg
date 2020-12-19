const db = require('../../config/db');
const md5 = require('md5');

const account = db.get('accounts');

module.exports.index = (req, res) => {
    res.render('signUp/index_signup');
}

module.exports.postSignUp = (req, res) => {
    // tạo account
    let id = account.value().length + 1;
    let password = md5(req.account.Password);
    account.push({ idStaff: id, userName: req.account.UserName, password: password }).write();
    res.render('login/index_login');
}