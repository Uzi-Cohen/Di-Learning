let fs = require('fs');

fs.writeFile('text', "Buy vegetables", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("appending - OK")
    }
})
fs.appendFile('text', "Buy meat", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("appending - OK")
    }
})

fs.readFile('text', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }else{
        console.log('reading start');
        console.log(data);
        console.log('reading end');
    }
});

fs.unlink('text', function(err){
    if(err){
        console.log(err);
    }
});