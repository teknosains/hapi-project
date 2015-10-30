## Sample Project of Node.js with [Hapi](http://hapijs.com) and Boostrap

## What is Hapi JS ? 

Its a Node.JS Framework. [Read more about Hapi](http://hapijs.com)

## Whats Included ? 

We're using :

* Handlebars template Engine
* MongoDB or MySQL ? coming up next.....
* Sample of Layouting
* Module as Hapi Plugins
* Good (plugins) for Logging
* Have it your way...

## Motivation

There's no special motivation. Its because I was asked to test the Hapi Node Framework for a Project so I created this sample.

![Picture](https://raw.githubusercontent.com/codetrash/hapi-project/master/public/images/hapi-project.png)

## Code Snippets

Running Server

```
var Hapi = require('hapi');
var server = new Hapi.Server();
var Good = require('good');
var Path = require('path');

/**
 * Lets the server run on this Host and Port
 */
server.connection({host:'127.0.0.1',port:3000});

//others code will be here.....

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
```

Handling Static files

```
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
```

Hapi Basic Route
```
/**
* Default route
*/
server.route({
	
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
		
        reply('Hello, world!');
    }
});
```


## Installation

Just Clone it to your local machine and get inside the Project root

Install Dependecy modules

``` npm install ```

``` node server.js ```

Open in your browser

``` http://127.0.0.1:3000 ```


## Tutorial
[Sample Project of Node.js with Hapi and Boostrap](http://teknosains.com/i/sample-project-of-nodejs-with-hapi-and-boostrap)