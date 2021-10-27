import * as skillDb from '../data/skill-db.js'


function index(req, res) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      //time: req.time
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skills) {
    res.render('skills/show', {
      skills,
      error
    })
  })
}

export {
  index,
  show

}