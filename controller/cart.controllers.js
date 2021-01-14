// const db = require('../config/db');
const Session = require('../model/session.model');

module.exports.addToCart = async (req, res) => {
    let productID = req.params.productID;
    let sessionID = req.signedCookies.sessionID;

    if (!sessionID) {
        alter('session chưa được tạo');
        res.redirect('/product');
        return;
    }

    try {
        let session = await Session.findById(sessionID);
        let product = session.cart.find(i => i._id == productID);

        if (!product) {
            session.cart.push({
                _id: productID,
                amount: 1
            });
        } else {
            product.amount += 1;
        }

        let saveSession = await session.save();
        console.log('save session success');

    } catch (err) {
        res.json({ message: err });
    }

    res.redirect('/product');
}