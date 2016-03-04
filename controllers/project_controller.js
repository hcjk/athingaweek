'use strict';
const r = require('request');
const m = require('../models');
const User = m.User;
const Project = m.Project;

module.exports = {
  index: function(req, res) {
    res.view(`project/index`);
  },
  new: function(req, res) {
    res.view(`project/new`);
  },
  create: function(req, res) {
    console.log(req.payload);
    if (!req.payload.name || !req.payload.url) {
      req.yar.flash('error', 'Hey, this form is invalid, quit that!');
      return res.redirect('/projects/new');
    }
    let project = new Project(req.payload);
    project.user = req.yar.get('user')._id;
    project.save(function(err) {
      console.log(err);
      req.yar.flash('notice', 'Hey you posted a new project, cool!');
      return res.redirect('/');
    });
  }
}