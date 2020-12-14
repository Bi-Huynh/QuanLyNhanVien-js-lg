const db = require('../../config/db');

const account = db.get('account');

module.exports.index = (req, res) => {
    res.render('/sign-up/index_signup');
}

module.exports.postSignUp = (req, res) => {
    let userName = req.body.UserName;
    let password = req.body.Password;
    let retypePassword = req.body.RetypePassword;
}