const Product = require('../../model/product.model');


module.exports.index = async (req, res) => {
    try {
        let products = await Product.find({}).sort({ 'name': 1 });
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }

    // chưa làm phân trang
}