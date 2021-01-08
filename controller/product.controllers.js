// const db = require('../config/db');
// const products = db.get('products');
const Product = require('../model/product.model');


module.exports.index = async (req, res) => {
    // let page = parseInt(req.params.page) || 1;
    // let perPage = 8;
    // let start = (page - 1) * perPage;
    // let end = page * perPage;
    // let array = products.slice(start, end);

    // let length = parseInt(products.count() / perPage);
    // res.render('product/index_product', {
    //     _listProducts: array,
    //     _page: page,
    //     _length: length + 1
    // });

    let products = await Product.find();
    res.render('product/index_product', {
        _listProducts: products
    })
    // bình thường thì phải dùng then (callback) để gọi render nhưng khi sử
    // dụng async thì không cần phải sử dụng callback => chương trình sẽ nhẹ hơn
}