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

    await Session.findById(sessionID).exec((err, session) => {
        // tìm sessionID trong session để xem có session được gửi lên hay không
        if (err) {
            // nếu không tìm thấy session thì báo lỗi.
            console.log(`Không tìm thấy sessionID, err: ${err}`);
            return;
        }

        let product = session.cart.find(i => i._id == productID);

        if (!product) {
            session.cart = {
                _id: productID,
                amount: 1
            }
        } else {
            product.amount += 1;
        }

        session.save(err => {
            if (err) {
                console.log(err);
                throw err;
            }
        });
    });

    res.redirect('/product');
}