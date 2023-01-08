require("dotenv").config()
const bodyPaser= require("body-parser")
const express = require("express")
const app = express()
const matter = require("./matter/Matter")
const activities = require("./activities/Activities")

const activitiesControl = require("./activities/ActivitiesControl")
const matterControl = require("./matter/MatterControl")

async function database(){
  
  const connection = await require("./databases/database")
  try{
    await connection.authenticate()
  
    await console.log("Banco De Dados Conectado")
  }catch(err){
    console.log(err)
  }
}
database()


app.use(bodyPaser.urlencoded({extended: false}))
app.use(bodyPaser.json())

app.set("view engime", "ejs")

app.use("/", activitiesControl)
app.use("/", matterControl)

app.get("/", (req, res)=> {
  res.render("index.ejs")
})

const PORT = process.env.PORT || 8081
app.listen(PORT, ()=> {
  console.log("Servidor rodando na porta: ", PORT)
})