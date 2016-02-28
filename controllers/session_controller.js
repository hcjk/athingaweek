var r = require('request');

module.exports = {
  index: function(req, res) {
    res.redirect(`https://slack.com/oauth/authorize?client_id=${process.env["SLACK_CLIENT"]}&scope=chat:write:user+users:read&team=T0HQ9H9DG&state=success`);
  },
  confirm: function(req, res) {
    r(`https://slack.com/api/oauth.access?client_id=${process.env["SLACK_CLIENT"]}&client_secret=${process.env["SLACK_SECRET"]}&code=${req.query.code}`, function(err, response, body) {
      body = JSON.parse(body);
      r(`https://slack.com/api/auth.test?client_id=${process.env["SLACK_CLIENT"]}&client_secret=${process.env["SLACK_SECRET"]}&token=${body.access_token}`, function(err, response, body) {
        body = JSON.parse(body);
        return res(`Welcome ${body.user}`);
      });
    });
  }
}