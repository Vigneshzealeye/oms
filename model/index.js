const { Sequelize, sequelize } = require("../dbconfig");

let db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
const accessParameter = require("./accessParameter")(Sequelize, sequelize);
db.accessParameter = accessParameter;
module.exports = db;
