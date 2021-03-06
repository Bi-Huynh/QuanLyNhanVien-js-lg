const mongoose = require('mongoose');
const Account = require('../../model/account.model');
const Staff = require('../../model/staff.model');
const md5 = require('md5');

module.exports.index = (req, res) => {
    res.render('signUp/index_signup');
}

module.exports.postSignUp = async (req, res) => {
    let errors = [];

    if (req.body.Password !== req.body.RetypePassword) {
        errors.push('Mật khẩu không giống nhau');
        res.render('/signUp/index_signup', {
            _errors: errors,
        });
        return;
    }



    try {
        let staff = new Staff({
            _id: new mongoose.Types.ObjectId()
        });

        let saveStaff = await staff.save();
        console.log("save staff success");

        console.log(staff);

        let account = new Account({
            _id: new mongoose.Types.ObjectId(),
            idStaff: staff._id,
            userName: req.body.UserName,
            password: md5(req.body.Password)
        });

        let saveAccount = await account.save();
        console.log("save staff success");
    } catch (err) {
        res.json({ message: err });
    }

    res.redirect('login/index_login');
}