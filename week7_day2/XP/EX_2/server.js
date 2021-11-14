const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http');
const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type' : 'application/json'});
    res.end(JSON.stringify(user));
})

server.listen(8080);