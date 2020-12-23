const db = require('../../config/db');

const products = db.get('products');

module.exports.index = (req, res) => {
    let page = parseInt(req.params.page) || 1;
    let perPage = 8;
    let start = (page - 1) * perPage;
    let end = page * perPage;
    let array = products.value().slice(start, end);
    let length = parseInt(products.value().length / perPage);
    res.render('product/index_product', {
        _listProducts: array,
        _page: page,
        _length: length + 1
    });
}