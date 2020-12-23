const db = require('../../config/db');

const products = db.get('products');

module.exports.index = (req, res) => {
    let page = parseInt(req.params.page) || 1;
    console.log(page);
    let perPage = 8;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    let array = products.value().slice(start, end);
    res.render('product/index_product', { _listProducts: array });
}