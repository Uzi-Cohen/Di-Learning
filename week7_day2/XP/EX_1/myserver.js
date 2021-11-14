const http = require('http');
const server = http.createServer((req,res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> Hello </h1>');
    res.write('<h2> Hello </h2>');
    res.write('<h3> Hello </h3>');
    res.end();
    
})
server.listen(3000);