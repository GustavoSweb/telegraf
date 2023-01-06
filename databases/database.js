const sequelize = require("sequelize")
/*
const connection = new sequelize("blog", process.env.USER, process.env.PASSWORD,{
  host: "aws.connect.psdb.cloud",
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    }
  },
  timezone: "-03:00"
})*/
const connection = new sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
})
module.exports = connection