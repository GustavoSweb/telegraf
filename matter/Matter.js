const sequelize = require("sequelize")
const connection = require("../databases/database")

const matter = connection.define("matter", {
  name:{
    type: sequelize.STRING,
    allowNull: false
  },
  
})



module.exports = matter