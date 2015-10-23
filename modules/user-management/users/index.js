/**************************************************
 * Configuring User Plugins
 **************************************************/
/**
 * Register Plugins
 */
exports.register = function(server, options, next) {
	
	server.route([
		
		{
			method : 'GET',
			path : '/user-management/users',
			handler : function(request, reply) {
				
				reply.view('user-management/users/displayUsers', {title:'Users'});
			}
		},
		{
			method : 'POST',
			path : '/user-management/users',
			handler : function(request, reply) {
				
			}
		}
		
		
		
	]);
	
	next();
};

/**
 * Plugin attributes...
 * we have here the Name and the Version of the plugin
 */
exports.register.attributes = {
	
	name : 'UserManagementUsers',
	version : '1.0.0'	
};