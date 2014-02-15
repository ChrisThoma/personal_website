var http = require("http");
var url = require("url");

//function to actually start our server
//the route parameter is the route method and the handle is the callback to be passed into the route
function start(route, handle) {
	//The request is sent from the browser to the 'server' we're creating with node. The response is what we will be sending back.

	function onRequest(request, response) {
		//grabs the pathname from the url (the part before the ?)
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response, request);
	}

	//actually starts the server listening for the port on the local host
	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

//exports allows us to declare what a method will be referred to in another file if we require this file.

//the variable after the dot is what will be called in other files, the value on the right of the assignment is the function in this file.
exports.start = start;