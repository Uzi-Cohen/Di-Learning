let datamain = require('./main.js');
const b = 5; 
datamain = datamain["number"];
console.log(datamain + b);

let http = require('http');
let server = http.createServer(function(req, res){
    console.log('I am listening....');
    res.end(`My module is:\n
            ${datamain + b}\n
            Hi there in the frontend`);
});
server.listen(3000); 

