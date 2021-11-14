const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.get('/', function(req,res){
    res.json({firstname: 'John',lastname: 'Doe'});
    
    console.log("{firstname: 'John',lastname: 'Doe'}");
})

app.listen(8080);


