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

  }
}