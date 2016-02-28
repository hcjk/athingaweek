// Models in the mongoose database
//  model name must be capitalized to separate words
//  model file name must be same as model name with ".js" appended

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/');

module.exports = {
  User: require('./User')(mongoose),
  Project: require('./Project')(mongoose)
}