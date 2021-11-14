const express = require('express');
const app = express();

app.get('/:id', function(req,res){
    console.log("req.params", req.params);
    res.json(req.params);
})

app.listen(3000);