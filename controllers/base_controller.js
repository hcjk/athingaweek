const m = require('../models');
const Project = m.Project;

module.exports = {
  index: function(req, res) {
    Project.find().populate('user').exec(function(err, projects) {
      res.view('base/index', {projects: projects});  
    });
  }
}