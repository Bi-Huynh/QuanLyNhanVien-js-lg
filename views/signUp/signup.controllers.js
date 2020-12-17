const db = require('../../config/db');

const account = db.get('accounts');

module.exports.index = (req, res) => {
    res.render('signUp/index_signup');
}

module.exports.postSignUp = (req, res) => {
    // tạo account
    let id = account.value().length + 1;
    // console.log(req.account);
    account.push({ idStaff: id, userName: req.account.UserName, password: req.account.Password }).write();
    res.render('login/index_login');
}