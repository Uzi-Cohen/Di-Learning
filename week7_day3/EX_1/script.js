const fs = require('fs');

fs.writeFile('text', 'Hello file', function (err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Writting comleted")
    }
})

fs.readFile('text', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }else{
        console.log(data);
        console.log("reading completed");
    }
    
});