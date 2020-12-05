const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapters = new FileSync('config/db.json');

const db = lowdb(adapters);
db.defaults({ informationStaff: [] }).write();

module.exports = db;