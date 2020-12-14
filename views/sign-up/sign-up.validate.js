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
}