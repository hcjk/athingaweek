'use strict';

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;
  var UserSchema = new Schema({
    name: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true
    },
    created_at: {type: Date, default: new Date()},
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  });


  var User = mongoose.model('Project', UserSchema);

  return User;
}