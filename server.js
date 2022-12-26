const http = require('http'); //the http module allows the creation of an http server and sending headers

//define a hostname and port (default localhost is port 3000 and ip 127.0.0.1)
const hostname = '127.0.0.1';
const port = 3000;

//create a server, using req for request, res for response, and sending a json response to the client
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is the smallest node program!\n');
});

//listen registers when the server is ready and performs actions, such as logging to the console
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

