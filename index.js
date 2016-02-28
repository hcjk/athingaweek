var fs = require("fs");

var Path = require('path');
var Hapi = require('hapi');

// For .env files, please don't load your .env into package control
require('dotenv').config();


var server = new Hapi.Server();
server.connection({port: process.env.PORT || 3000});

// Required to setup views
//  js and css get written in uncompiled/{respective_folder} first, then run `gulp` to compile into public
//  views are in the views/ folder, all view folders should have a corresponding controller, except for
//  special folders like shared.

require('babel-core/register')({
    plugins: ['transform-react-jsx']
});

server.register(require('inert'), () => {});
server.register(require('vision'), (err) => {
  server.views({
      engines: {
          jsx: require('hapi-react-views')
      },
      compileOptions: {}, // optional
      relativeTo: __dirname,
      path: 'views'
  });
});

// Authentication before requests go through
const auth = require('./auth')(server);

// Setup flash rendering to the frontend
const flashes = require('./flashes')(server);

// For flash messages, accessible through req.session.flash('type', 'message')
var options = {
    storeBlank: false,
    cookieOptions: {
        password: 'passwordpasswordpasswordpasswordpasswordpasswordpassword',
        isSecure: false
    }
};

server.register({
    register: require('yar'),
    options: options
}, function (err) { });

// Configure routes
var routes = require('./routes')(server);

server.start(function () {
    console.log('Server running at:', server.info.uri);
});