const db = require('../config/db');

module.exports.addToCart = (req, res) => {
    let productID = req.params.productID;
    let sessionID = req.signedCookies.sessionID;

    if (!sessionID) {
        alter('session chưa được tạo');
        res.redirect('/product');
        return;
    }

    let amount = db
        .get('session')
        .find({ id: sessionID })
        .get('cart.' + productID, 0)
        .value();

    db.get('session')
        .find({ id: sessionID })
        .set('cart.' + productID, amount + 1)
        .write();

    res.redirect('/product');
}