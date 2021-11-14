let bodyParser = require('body-parser');
const express = require('express');
var cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (res,req) => {
    console.log("ok");
})

app.get('/aboutMe/:hobby',(req,res) => {
    if(isNaN(req.params["hobby"])){
        console.log(req.params["hobby"]);
        res.send(req.params["hobby"])
    }else{
        res.status(404);
        res.send("not a string");
        console.log("not a string");
    }
})

app.get('/pic', (req,res) => {
    console.log("pic");
    res.sendFile(__dirname + '/public/img.html');
})
app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/public/form.html');
})
app.post('/formData', (req,res) => {
    console.log(req.body);
    res.send(`${req.body.message} ${req.body.email}`)
})

app.listen(8080);