let myobj = require('./main.js');
let myVar = myobj["first"];

let http = require('http');
let server = http.createServer(function(req,res){
    res.end(JSON.parse(myVar));
})
server.listen(8080);







