const Account = require('../../model/account.model');

module.exports.checkSignUp = (req, res, next) => {
    let userName = req.body.UserName;
    let password = req.body.Password;
    let retypePassword = req.body.RetypePassword;

    let errors = [];

    if (!userName) {
        errors.push('User name is required.');
    }

    if (!password) {
        errors.push('Password is required.');
    }

    if (!retypePassword) {
        errors.push('Retype password is required.');
    }

    if (password !== retypePassword) {
        errors.push('password not same as retype password');
        res.render('signUp/index_signup', {
            _errors: errors,
            _value: req.body
        })
        return;
    }

    let _userName = Account.find({ userName: userName });

    if (!_userName) {
        errors.push('User name is already exist');
        res.render('signUp/index_signup');
        return;
    }

    req.account = req.body;
    next();
}