/**************************************************
 * Configuring Employees Plugins
 **************************************************/

var Handler = require('./handler'); //include the handler

/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	
	next();
};

/**
 * Plugin attributes...
 * we have here the Name and the Version of the plugin
 */
exports.register.attribute = {
	
	name : 'EmployeesModule',
	version : '1.0.0'	
};