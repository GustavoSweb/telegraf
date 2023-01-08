const express = require("express")
const router = express.Router()
const activities = require("./Activities")
const matter = require("../matter/Matter")

router.get("/admin/activities", async (req, res)=> {
  const activity = await activities.findAll({
    include: matter
  })
    res.render("admin/activities/index.ejs", {
    activities: activity,
    matter: matter
  })

  
})
router.get("/admin/activities/create", async (req, res)=> {
  const materAll = await matter.findAll()
    
    res.render("admin/activities/create.ejs", {
    matter: matterAll
  })
})
router.post("/activities/save", async (req, res)=> {
  const {title, matterId, url, entday} = req.body
  try{
    activities.create({
    title,
    matterId,
    url,
    entday
  })
    res.redirect("/admin/activities")
  }catch(err){
    res.redirect("/admin/activities/create")
  }
})
router.get("/admin/activities/edit/:id", async(req,res)=> {
  try{
  const id = await req.params.id
  const activity = await activities.findOne({where:{id: id},include: matter})
  const matte = await matter.findAll()
  res.render("admin/activities/edit.ejs",{
    activity:activity,
    matter:matte
  })
  }catch(err){
    console.log(err)
  }
})
router.post("/activity/update", async (req, res)=>{
  const {id, title, entday, url, matterId} = req.body
  
  const activity = await activities.findByPk(id)
  
  await activity.update({
    title,
    entday,
    url,
    matterId
  })
  try{
  await activity.save()
  res.redirect("/admin/activities")
  }catch(err){
    throw new Error(err)
  }
})
module.exports = router