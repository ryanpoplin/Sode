var Async = require('async');
var Bell = require('bell');
var Blipp = require('blipp');
var Hapi = require('hapi');
var HapiAuthCookie = require('hapi-auth-cookie');
var Hoek = require('hoek');

var Api = require('./api');
var Authentication = require('./authentication');
var Controllers = require('./controllers');
var Models = require('./models');
var Routes = require('./routes');

var internals = {
	servers: {
		http: {
			port: 8080,
			host: '0.0.0.0',
			labels: ['http']
		},
		api: {
			port: 8088,
			host: '0.0.0.0',
			labels: ['api']
		}
	},
	options: {
		files: {
			relativeTo: __dirname
		}
	}
};

exports.init = function (callback) {
	var server = new Hapi.Server();
	server.connection(internals.servers.http);
	server.connection(internals.servers.api);
};

// var server = new Hapi.Server();
// server.connection({
// 	port: 8088
// });
// server.route({
// 	method: 'GET',
// 	path: '/',
// 	handler: function (request, reply) {
// 		return reply('hello hapi');
// 	}
// });
// server.start(function (err) {
// 	console.log(server.info.uri);
// });