const db = require('../config/db');
const Session = require('../model/session.model');

module.exports.addToCart = (req, res) => {
    let productID = req.params.productID;
    let sessionID = req.signedCookies.sessionID;

    if (!sessionID) {
        alter('session chưa được tạo');
        res.redirect('/product');
        return;
    }

    Session.findById(sessionID, (err, session) => {
        if (err) {
            // nếu không tìm thấy session thì báo lỗi.
            throw err;
        }

        let product = session.cart.find(i => i.productID == productID);

        if (!product) {
            session.cart = {
                productID: productID,
                amount: 0
            }

            session.save(err => {
                if (err) {
                    throw err;
                }
            });
        } else {
            product.amount += 1;

            session.save(err => {
                if (err) {
                    throw err;
                }
            });
        }
    });

    // let amount = db
    //     .get('session')
    //     .find({ id: sessionID })
    //     .get('cart.' + productID, 0)
    //     .value();

    // db.get('session')
    //     .find({ id: sessionID })
    //     .set('cart.' + productID, amount + 1)
    //     .write();

    res.redirect('/product');
}