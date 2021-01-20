module.exports.index = (req, res) => {
    res.render('login/index_login');
}

module.exports.postLogin = (req, res) => {
    res.cookie('userID', req.staff, {
        signed: true
    });
    // thêm signed để signed cookie có thể hoạt động.
    res.render('main/index');
}

module.exports.viewSignUp = (req, res) => {
    res.render('signUp/index_signup');
}