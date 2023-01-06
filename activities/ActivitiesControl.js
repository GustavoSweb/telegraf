const express = require("express")
const router = express.Router()
const activities = require("./Activities")
const matter = require("../matter/Matter")

router.get("/activities", (req, res)=> {
  activities.findAll().then(activity => {
    res.render("admin/activities/index.ejs", {
    activities: activity,
    matter: matter
  })
  }).catch(err => {
    res.redirect("/")
  })
  
})
router.get("/activities/create", (req, res)=> {
  matter.findAll().then((matteray)=> {
    res.render("admin/activities/create.ejs", {
    matter: matteray
  })
  })
  
})
router.post("/activities/save", (req, res)=> {
  const title = req.body.title
  const matterid = req.body.matter
  console.log(matterid)
  const url = req.body.url
  const entday = req.body.date
  
  async function save(arg) {
    try{
    activities.create({
    title,
    matterid,
    url,
    entday
  })
    }catch(err){
      console.log(err)
    }
  }
  save()
  
  res.redirect("/activities")
})

module.exports = router