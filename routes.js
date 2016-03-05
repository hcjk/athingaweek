'use strict';
var c = require('./controllers/index');

module.exports = function(server) {
  // Base routes
  server.route({method: 'GET', path: '/', handler: c.Base.index});

  // Session routes
  server.route({method: 'GET', path: '/login', handler: c.Session.index});
  server.route({method: 'GET', path: '/login_confirm', handler: c.Session.confirm});

  // Project routes
  server.route({method: 'GET', path: '/projects', handler: c.Project.index});
  server.route({method: 'POST', path: '/projects', handler: c.Project.create});
  server.route({method: 'GET', path: '/projects/new', handler: c.Project.new});

  // Static files
  server.route({
    method: 'GET',
    path: '/css/{file}.css',
    handler: function (request, reply) {
        reply.file(`./public/css/${request.params.file}.css`);
    }
  });
  server.route({
      method: 'GET',
      path: '/images/{file}',
      handler: function (request, reply) {
          reply.file(`./public/images/${request.params.file}`);
      }
  });
  server.route({
      method: 'GET',
      path: '/js/{file}.js',
      handler: function (request, reply) {
          reply.file(`./public/js/${request.params.file}.js`);
      }
  });
  server.route({
      method: 'GET',
      path: '/{file*}',
      handler: function (request, reply) {
          reply.file(`./${request.params.file}`);
      }
  });
};