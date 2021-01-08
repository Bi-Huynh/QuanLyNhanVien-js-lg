const mongoose = require('mongoose');
const Session = require('../model/session.model');

module.exports = (req, res, next) => {

    if (!req.signedCookies.sessionID) {
        let session = new Session({
            _id: new mongoose.Types.ObjectId()
        });

        session.save(err => {
            if (err) {
                console.log(err);
            }
        });

        res.cookie('sessionID', session._id, {
            signed: true
        });
    }

    next();
}