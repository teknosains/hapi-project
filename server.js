var Hapi = require('hapi');
var server = new Hapi.Server();
var Good = require('good');
var Path = require('path');

/**
 * Lets the server run on this Host and Port
 */
server.connection({host:'127.0.0.1',port:3000});


/**
 * Routing Static Pages [JS, Css, Images, etc]
 */
server.register(require('inert'), function(err) {
	
	if (err) {
		
		throw err;
	}
	
	server.route({
		method : 'GET', path : '/public/{path*}', handler : {
			directory : {
				path : './public',
				listing : false,
				index : false
			}
		}
	});
	
});


/**
 * Register all Modules as Plugins Here
 * 
 */

var plugins = [
	
	{ register : require('vision') }, //register Vision with others Plugins
	{ register : require('./modules/employees/index.js') },
	{ register : require('./modules/user-management/users/index.js') }	
	
];


/**
 * Routing Views
 */ 
server.register(plugins, function (err) {

    if (err) {
        throw err;
    }

    server.views({
		
        engines: { html: require('handlebars') },
		layout : true,
        path: __dirname + '/views',
		layoutPath : Path.join(__dirname, './views/layouts'), //setting Global Layout,
		partialsPath : Path.join(__dirname,'./views/layouts/partial') //partial Views
    });
	
	/**
	 * Default route
	 */
    server.route({ method: 'GET', path: '/', handler: function(request, reply) {
		
		reply.view('home/home', {title : 'Home'});
		
	} });
});




/**
 * running Http Node Server with Good Plugins for Logging  
 */
server.register({
	
	register : Good,
	options : {
		
		reporters : [{
			reporter : require('good-console'),
			events : {
				
				response : '*',
				log:'*'
			}
		}]
	}
	
}, function(error) {
	
	if(error) {
		
		throw error;
	}
	
	/**
	 * Starting Server
	 */
	server.start(function(){
	
		console.log("Server running on", server.info.uri);
	});
	
});
 
