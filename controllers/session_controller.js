const r = require('request');
const m = require('../models');
const User = m.User;

module.exports = {
  index: function(req, res) {
    res.redirect(`https://slack.com/oauth/authorize?client_id=${process.env["SLACK_CLIENT"]}&scope=chat:write:user+users:read&team=T0HQ9H9DG&state=success&redirect_uri=${process.env["SLACK_REDIRECT_URI"]}`);
  },
  confirm: function(req, res) {
    r(`https://slack.com/api/oauth.access?client_id=${process.env["SLACK_CLIENT"]}&client_secret=${process.env["SLACK_SECRET"]}&code=${req.query.code}`, function(err, response, body) {
      body = JSON.parse(body);
      const access_token = body.access_token;
      User.findOne({access_token: access_token}).exec(function(err, user) {
        console.log(user);
        if (user) {
          req.yar.set('user', user);
          return res.redirect('/');  
        }

        r(`https://slack.com/api/auth.test?client_id=${process.env["SLACK_CLIENT"]}&client_secret=${process.env["SLACK_SECRET"]}&token=${body.access_token}`, function(err, response, body) {
          body = JSON.parse(body);
          r(`https://slack.com/api/users.info?client_id=${process.env["SLACK_CLIENT"]}&client_secret=${process.env["SLACK_SECRET"]}&token=${access_token}&user=${body.user_id}`, function(err, response, body) {
            body = JSON.parse(body);
            const temp_user = {
              name: body.user.name,
              email: body.user.profile.email,
              image: body.user.profile.image_192,
              access_token: access_token
            }
            const user = new User(temp_user);
            user.save(function(err) {
              if (err) console.log(err);
              req.yar.set('user', user);
              return res.redirect('/');  
            })
          });
        });
      });
    });
  }
}