module.exports = function(server) {
  server.ext('onPreResponse', function(req, reply) {
    var res = req.response;

    if (res.variety === 'view') {
      if (!res.source.context) {
        res.source.context = {};
      }

      var context = res.source.context;
      var error = req.yar.flash('error');
      var notice = req.yar.flash('notice');

      context.flash = {};
      context.flash.error = error || [];
      context.flash.notice = notice || [];
          
      return reply.continue();
    }

    return reply.continue();
  });
}