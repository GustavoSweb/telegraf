const express = require("express")
const router = express.Router()

const matter = require("./Matter")

router.get("/matter", (req, res)=> {
  res.render("admin/matter/index.ejs")
})
router.get("/matter/create", (req, res)=> {
  res.render("admin/matter/create.ejs")
})
router.post("/matter/save", (req, res)=> {
  
  const name = req.body.title
  console.log(name)
  async function create() {
try{
    matter.create({
    name
  })
    }catch(err){
      console.log(err)
    }
  }
  create()
    
  
  
  
  res.redirect("/")
})

module.exports = router