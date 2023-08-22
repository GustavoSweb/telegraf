const sequelize = require("sequelize")
const connection = require("../database/database")

const Projects = connection.define("projects", {
    title:{
        type: sequelize.STRING,
        allowNull: false
    },
    description:{
        type: sequelize.TEXT,
        allowNull: false
    },
    deliver:{
        type: sequelize.DATE,
        allowNull: true
    },
    sending:{
        type: sequelize.DATE,
        allowNull: false
    },
    bimester:{
        type:sequelize.INTEGER,
        allowNull: false
    },
    sender:{
        type:sequelize.STRING,
        allowNull: false
    },
    minMembers:{
        type: sequelize.STRING,
        allowNull: true
    },
    maxMembers: {
        type: sequelize.STRING,
        allowNull: true
    }
})
Projects.sync({force:false})
