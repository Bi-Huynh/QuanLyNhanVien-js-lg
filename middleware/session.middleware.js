// const db = require('../config/db');
// const id = require('shortid');
const Session = require('../model/session.model');
// const session = new Session();

module.exports = (req, res, next) => {
    // let sessionID = id.generate();


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

        // db.get('session').push({ id: sessionID }).write();
    }

    next();
}