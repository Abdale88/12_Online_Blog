const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
=======
const Sequelize = require('sequelize');
require('dotenv').config();

>>>>>>> ecd1c6b778341a7651dd06dd99ce820192982cc0
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
