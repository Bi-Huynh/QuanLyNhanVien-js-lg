module.exports.postCreate = (req, res, next) => {
    let errors = [];

    if (!req.body.fristName) {
        errors.push('Frist Name staff is required.');
    }

    if (!req.body.lastName) {
        errors.push('Last Name staff is required.');
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