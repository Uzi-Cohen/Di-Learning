var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let fs = require("fs");

app.use('/',express.static(__dirname+'/public'));

app.post('/register',(req,res) => {
	let file = './users.txt';
	let list = [];
	try {
		let fileData = fs.readFileSync(file);
		let fileString = fileData.toString();
		list = JSON.parse(fileString);
	} catch(err) {
		console.log(err);
	}
	let usernames = list.map(user => user.username);
	if (usernames.includes(req.body.username)) {
		res.send(false);
		return;
	} else {
		list.push(req.body);
		// console.log(list);
		fs.writeFileSync(file,JSON.stringify(list))
		res.send(true)
	}
})

app.post('/login',(req,res) => {
	let file = './users.txt';
	let list = [];
	try {
	let fileData = fs.readFileSync(file);
	let fileString = fileData.toString();
	list = JSON.parse(fileString);
	} catch(err) {
		console.log(err);
	}
	let match = list.filter(a => a.username == req.body.username && a.password == req.body.password);
	let response = match.length > 0 ? true : false;
	res.send(response)
})


app.listen(2005);








