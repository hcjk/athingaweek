'use strict';

module.exports = function(mongoose) {
  var Schema = mongoose.Schema;
  var UserSchema = new Schema({
    access_token: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'string',
      unique: true,
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: true
    },
    created_at: {type: Date, default: new Date()},
  });


  var User = mongoose.model('User', UserSchema);

  return User;
}