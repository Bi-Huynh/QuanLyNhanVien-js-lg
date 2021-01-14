// const db = require('../config/db');
// const products = db.get('products');
const Product = require('../model/product.model');


module.exports.index = async (req, res) => {
    try {
        let products = await Product.find({}).sort({ 'name': -1 });
        res.render('product/index_product', {
            _listProducts: products
        });
    } catch (err) {
        res.json({ message: err });
    }

    // chưa làm phân trango
}