const db = require('../../config/db');

const products = db.get('products');

module.exports.index = (req, res) => {
    // console.log(products.value());
    res.render('product/index_product', { _listProducts: products.value() });
}