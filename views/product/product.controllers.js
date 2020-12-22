const db = require('../../config/db');

const products = db.get('products');

module.exports.index = (req, res) => {
    res.render('product/index_product');
}