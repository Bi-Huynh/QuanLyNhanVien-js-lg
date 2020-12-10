module.exports.postCreate = (req, res, next) => {
    let errors = [];

    if (!req.body.nameStaff) {
        errors.push('Name staff is required.');
    }

    if (errors.length > 0) {
        res.render('user/create_user', {
            _errors: errors,
            _value: req.body
        });
        return;
    }

    next();
};