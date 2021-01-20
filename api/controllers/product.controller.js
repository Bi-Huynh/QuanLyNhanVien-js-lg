const Product = require('../../model/product.model');


module.exports.index = async (req, res) => {
    try {
        let products = await Product.find({}).sort({ 'name': 1 });
        res.render('product/index_product', {
            _listProducts: products
        })
        // res.json(products);
    } catch (err) {
        res.json({ message: err, note: 'Error product index' });
    }

    // chưa làm phân trang
}