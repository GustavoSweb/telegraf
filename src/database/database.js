const sequelize = require("sequelize")

const connection = new sequelize(process.env.DATABASE)

module.exports = connection