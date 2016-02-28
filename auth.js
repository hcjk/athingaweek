const User = require('./models').User;

// This file is used to authenticate users and to maintain session through site

module.exports = function(server) {
  // To authenticate the users session
  server.ext('onPreResponse', function (req, reply) {
    const res = req.response;
    if (res.variety !== 'view') return reply.continue();

    const user = req.yar.get('user');
    if (!res.source.context) {
      res.source.context = {};
    }

    // Update the user saved in session on every request
    return User.findOne({_id: user._id}, function(err, new_user) {
      res.source.context.current_user = new_user;
      return reply.continue();
    });
  });
}