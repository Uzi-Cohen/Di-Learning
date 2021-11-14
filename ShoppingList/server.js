const exp = require('express');
const bp = require('body-parser')
const cors = require('cors');
const fs = require('fs');
path = require('path');
const app = exp();
app.use(exp.static(path.join('../views', 'index')));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())


app.set('view engine', 'ejs');


app.get('/',(req,res)=>{

    fs.readFile("list.json","utf-8", (err, file) => {
        if(err){
            throw err;
        }else if(file.length == 0){
            console.log("file0",file);
            res.render('index',{
                items:[]
              })
            
        }else{
            console.log("file1",file);
            res.render('index',{
                items:JSON.parse(file)
            })
        }
    })
})

app.post('/', (req,res) => {
    console.log("POST");
    let data;
    let list = fs.readFileSync("list.json","utf-8");
    if(list.length != 0){
        list = JSON.parse(list);
        list.push(req.body);
        data = JSON.stringify(list);
    }else{
        let arr = [req.body]
        data = JSON.stringify(arr)
    }
    fs.writeFile('list.json', data, (err) => {
        if(err){
            throw err;
        }
        console.log("APPENDED",data)
    })
    console.log("redirected?")
})


app.listen(3000);