const http = require('http'); //here I get http methods

//define a hostname and port (default localhost is port 3000 and ip 127.0.0.1)
const hostname = '127.0.0.1';
const port = 3000;

//create a server, using req for request, res for response, and sending a json response to the client
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, this is the smallest node program!\n');
});

//listen registers when the server starts and performs actions
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});

