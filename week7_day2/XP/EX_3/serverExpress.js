const express = require('express');
const app = express();

app.get('/', function (req,res){
    res.send('<h2>First Express Server</h2>');
})


app.listen(3000);
