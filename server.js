var http = require ('http'),
	port = 6001;

function handle(req, res){
	console.log('requete');
	res.end('<!doctype html><html><head><title>Blabla</title></head><body><h1>Hello</h1></body></html>');
}	

var server = http.createServer(handle);

server.listen(port, function(){
	console.log("Server listening on: http://localhost:%s", port);
});