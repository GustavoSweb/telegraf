const sequelize = require("sequelize")
const connection = require("../databases/database")
const matter = require("../matter/Matter")
const activities = connection.define("activities", {
  title: {
    type: sequelize.STRING,
    allowNull: false
  },
  
  url: {
    type: sequelize.STRING,
    allowNull: false
  },
  entday:{
    type: sequelize.DATE,
    allowNull: false
  }
})
activities.belongsTo(matter)

module.exports = activities