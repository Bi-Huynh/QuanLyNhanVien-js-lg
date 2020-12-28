const db = require('../config/db');
const id = require('shortid');

module.exports = (req, res, next) => {
    let sessionID = id.generate();

    if (!req.signedCookies.sessionID) {
        res.cookie('sessionID', sessionID, {
            signed: true
        });

        db.get('session').push({ id: sessionID }).write();
    }

    next();
}