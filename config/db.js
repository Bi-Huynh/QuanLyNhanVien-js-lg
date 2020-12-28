const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('config/db.json');

const db = lowdb(adapters);
db.defaults({
    informationStaff: [],
    accounts: [],
    products: [],
    session: []
}).write();

module.exports = db;