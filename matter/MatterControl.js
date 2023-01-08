const express = require("express")
const router = express.Router()

const matter = require("./Matter")

router.get("/admin/matter",async (req, res)=> {
  const matterAll = await matter.findAll()
  res.render("admin/matter/index.ejs", {
    matter:matterAll
  })
})
router.get("/matter/create", (req, res)=> {
  res.render("admin/matter/create.ejs")
})
router.post("/matter/save", async (req, res)=> {
  const { name }= req.body
  if(name == undefined) res.redirect("/admin/matter/create")
  try{
    
    matter.create({
    name
  })
  res.redirect("/admin/matter")
  }catch(err){
    res.redirect("/admin/matter/create")
  }
  
  
})

module.exports = router