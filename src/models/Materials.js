const sequelize = require("sequelize")
const connection = require("../database/database")

const Materials = connection.define("materials", {
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    },
    important:{
        type: sequelize.INTEGER,
        allowNull: false
    },
    teacher: {
        type: sequelize.STRING,
        allowNull: false
    }
})

